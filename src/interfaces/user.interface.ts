export interface IUser {
    sub: string,
    email: string,
    password: string,
    name: string,
    avatar: string,
    roles: string[],
    last_login: string,
    token_version: number
}

export interface ISignUpData {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string
}

export interface ISignInData {
    email: string,
    password: string
}