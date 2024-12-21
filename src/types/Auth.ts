export type Auth = {
    id: string;
    image: string;
    name: string;
};

export type Login = {
    email: string;
    password: string;
};

export type Register = {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
};

export type ForgotPassword = {
    email: string;
};

export type ResetPassword = {
    email: string;
    password: string;
    password_confirmation: string;
    token: string;
};