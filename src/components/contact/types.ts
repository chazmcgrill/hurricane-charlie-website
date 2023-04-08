export interface MessageState {
    name: string;
    email: string;
    message: string;
}

export interface MessageStatus {
    msg: string;
    status: string;
    isLoading?: boolean;
}

export type FormEventType = React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
export type MouseEventType = React.MouseEvent<HTMLButtonElement, MouseEvent>;
