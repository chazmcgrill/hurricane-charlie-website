export interface FormValidatorData {
    name: string;
    email: string;
    message: string;
}

interface FormValidatorReturn {
    isValid: boolean;
    errorMessages: FormValidatorData;
}

function emailCheck(email: string) {
    const rgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(rgx);
}

function nameCheck(name: string) {
    const rgx = /^[a-zA-Z ]/;
    return name.match(rgx);
}

function messageCheck(msg: string) {
    const rgx = /[A-Za-z0-9\w.'?!,@$#\-_\n\r]/;
    return msg.match(rgx);
}

export function validateEmail(email: string): string {
    switch (true) {
        case (email.length === 0):
            return 'email is required';
        case (!emailCheck(email)):
            return 'incorrect email format';
        default:
            return '';
    }
}

export function formValidator(data: FormValidatorData): FormValidatorReturn {
    const { name, email, message } = data;
    let errorMessages = { name: '', email: '', message: '' } as FormValidatorData;

    // check name
    if (name.length === 0) {
        errorMessages.name = 'name is required';
    } else if (!nameCheck(name)) {
        errorMessages.name = 'invalid characters entered';
    }

    // check email
    if (email.length === 0) {
        errorMessages.email = 'email is required';
    } else if (!emailCheck(email)) {
        errorMessages.email = 'incorrect email format';
    }

    // check message
    if (message.length < 10) {
        errorMessages.message = 'message is too short min length 10 characters';
    } else if (!messageCheck(message)) {
        errorMessages.message = 'invalid characters entered'
    }

    const isValid = Object.values(errorMessages).every(errorMessage => errorMessage === '');

    return { errorMessages, isValid };
}