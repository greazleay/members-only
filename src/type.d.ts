export interface User {
    email: string,
    password: string,
    name?: string,
    avatar?: string
}

export interface AuthProviderInterface {
    authToken: string,
    user: User,
    isError: string,
    isLoading: boolean,
    login: ({ email, password }: User, callback: VoidFunction) => Promise<true | null>,
    logout: () => Promise<true | null>,
    register: ({ email, password, name }: User) => Promise<true | null>,
    getUser: () => Promise<true | null>,
    refreshToken: () => Promise<string | null>
}

export type LocationState = {
    from: {
        pathname: string;
    };
};