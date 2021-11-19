import { useState } from 'react';
import axios from 'axios';
import { User } from '../type'

let defaultUser: User = {
    email: '',
    password: '',
    name: '',
    avatar: ''
}

export const useProvideAuth = () => {
    const [authToken, setAuthToken] = useState<string>('');
    const [isError, setIsError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User>(defaultUser);

    const API_URL = 'https://api.polldevs.com/api/';

    const instance = axios.create({
        baseURL: API_URL,
        headers: { Authorization: `Bearer ${authToken}` },
        timeout: 15000,
        withCredentials: true,
    });

    const login = async ({ email, password }: User, callback: VoidFunction): Promise<true | null> => {
        try {
            setIsLoading(true)
            const res = await instance.post('auth/login', { email, password });
            if (res.status !== 200) throw new Error('An error has occured');
            setAuthToken(res.data.authToken);
            setTimeout(() => callback(), 100);
            return true;
        } catch (err: any) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async (): Promise<true | null> => {
        try {
            await instance.get('auth/logout');
            setAuthToken('');
            return true;
        } catch (err: any) {
            console.error(err.message)
            setIsError(err.message);
            return null;
        }
    };

    const register = async ({ email, password, name }: User): Promise<true | null> => {
        try {
            setIsLoading(true);
            const res = await instance.post('auth/register', { email, password, name });
            if (res.status !== 200) throw new Error('An error has occured');
            setUser(res.data.user);
            return true;
        } catch (err: any) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    const getUser = async (): Promise<true | null> => {
        try {
            setIsLoading(true)
            const res = await instance.get('user/userinfo');
            if (res.status !== 200) throw new Error('An error has occured');
            setUser(res.data);
            return true;
        } catch (err: any) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    const refreshToken = async (): Promise<string | null> => {
        try {
            setIsLoading(true);
            const res = await instance.post('auth/refresh_token');
            if (res.status === 403) {
                logout();
                throw new Error('Refresh token has expired, please initiate a new signin request');
            }
            if (res.status !== 200) throw new Error('An error has occured');
            setAuthToken(res.data.authToken);
            return res.data.authToken;
        } catch (err: any) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        } finally {
            setIsLoading(false);
        }
    }

    instance.interceptors.response.use(
        (res) => {
            return res;
        },
        async (err) => {
            const originalConfig = err.config;

            if (err.response) {
                // Access Token has expired
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;

                    try {
                        const new_token = await refreshToken();
                        originalConfig.headers.Authorization = `Bearer ${new_token}`;
                        instance.defaults.headers.common.Authorization = `Bearer ${new_token}`;
                        return instance(originalConfig);
                    } catch (_error: any) {
                        if (_error.response && _error.response.data) {
                            return Promise.reject(_error.response.data);
                        }
                        return Promise.reject(_error);
                    }
                }

                if (err.response.status === 403 && err.response.data) {
                    return Promise.reject(err.response.data);
                }
            }

            return Promise.reject(err);
        }
    );

    return { authToken, user, isError, isLoading, login, logout, register, getUser, refreshToken };
}
