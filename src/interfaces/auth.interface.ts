import { IUser, ISignInData, ISignUpData } from './user.interface'

export interface AuthProviderInterface {
    authToken: string,
    user: IUser,
    error: string,
    loading: boolean,
    login: (signInData: ISignInData, callback: VoidFunction) => Promise<boolean>,
    logout: () => Promise<boolean>,
    register: (signUpData: ISignUpData) => Promise<boolean>,
    getUser: () => Promise<boolean>,
    refreshToken: () => Promise<string | null>
}