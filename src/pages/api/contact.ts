import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

interface ValidatedRequestBody {
    name: string;
    email: string;
    message: string;
}

const requestBodySchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

const validateRequestBody = (body: ValidatedRequestBody) => {
    const validatedBody = requestBodySchema.parse(body);
    return validatedBody;
};

const cleanString = (dirtyString: string) => dirtyString.replace(/[|&;$%@"<>()+,]/g, '');

export default async function contact(request: NextApiRequest, response: NextApiResponse) {
    const requestBody = validateRequestBody(request.body);
    const output = `Name: ${cleanString(requestBody.name)}\n Email: ${requestBody.email}\n Message: ${cleanString(requestBody.message)}`;

    const mailOptions = {
        from: `"HC Website" ${process.env.HC_MAIL_ADDRESS}`,
        to: process.env.HC_MAIL_ADDRESS,
        subject: 'New Contact Request',
        text: output,
    };

    const transport = nodemailer.createTransport({
        host: process.env.HC_MAIL_SERVER,
        port: 465,
        secure: true,
        auth: {
            user: process.env.HC_MAIL_ADDRESS,
            pass: process.env.HC_MAIL_PASSWORD,
        },
    });

    // important to await the mail sending when using serverless functions
    await new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return reject(error);
            }
            console.log('Message sent: %s', info.messageId);
            resolve(info);
        });
    });

    response.status(200).json({ status: 'OK' });
}
