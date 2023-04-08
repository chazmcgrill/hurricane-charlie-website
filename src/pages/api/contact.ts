import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function contact(request: NextApiRequest, response: NextApiResponse) {
    const output = `Name: ${request.body.name}\n Email: ${request.body.email}\n Message: ${request.body.message}`;

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

    await new Promise((resolve, reject) => {
        // send mail with defined transport object
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
