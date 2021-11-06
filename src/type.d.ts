export type AuthContextTypes = { 
    authToken: string, 
    user: any, 
    isError: string, 
    isLoading: boolean, 
    login: () => Promise<true | null>, 
    logout: () => Promise<true | null>, 
    register: () => Promise<true | null>, 
    getUser: () => Promise<true | null>, 
    refreshToken: () => Promise<string | null> 
}

export interface AuthProviderInterface {
    authToken: string, 
    user: any, 
    isError: string, 
    isLoading: boolean, 
    login: ({email, password} : User) => Promise<true | null>, 
    logout: () => Promise<true | null>, 
    register: ({email, password, name} : User) => Promise<true | null>, 
    getUser: () => Promise<true | null>, 
    refreshToken: () => Promise<string | null>
}

interface User {
    email: string,
    password: string,
    name: string
}