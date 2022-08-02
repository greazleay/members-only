import { useState } from 'react';
import axios from 'axios';
import { IUser, ISignInData, ISignUpData } from '../interfaces/user.interface'

let defaultUser: IUser = {
    sub: '',
    email: '',
    password: '',
    name: '',
    avatar: '',
    roles: [],
    last_login: '',
    token_version: 0
}

export const useAuthProvider = () => {

    const [authToken, setAuthToken] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<IUser>(defaultUser);

    const API_URL = 'https://api.polldevs.com/api/';

    const instance = axios.create({
        baseURL: API_URL,
        headers: { Authorization: `Bearer ${authToken}` },
        timeout: 15000,
        withCredentials: true,
    });

    const login = async (signInData: ISignInData, callback: VoidFunction): Promise<boolean> => {
        try {

            const res = await instance.post('auth/login', signInData);
            if (res.status !== 200) throw new Error('An error has occured');

            setAuthToken(res.data.authToken);
            setTimeout(() => callback(), 100);

            return true;
        } catch (err: any) {
            console.error(err.message);
            setError(err.message);
            return false
        } finally {
            setLoading(false);
        }
    };

    const logout = async (): Promise<boolean> => {
        try {
            await instance.get('auth/logout');
            setAuthToken('');
            return true;
        } catch (err: any) {
            console.error(err.message)
            setError(err.message);
            return false
        }
    };

    const register = async (signUpData: ISignUpData): Promise<boolean> => {
        try {
            const res = await instance.post('auth/register', signUpData);
            if (res.status !== 200) throw new Error('An error has occured');
            setUser(res.data.user);
            return true;
        } catch (err: any) {
            console.error(err.message);
            setError(err.message);
            return false
        } finally {
            setLoading(false);
        }
    };

    const getUser = async (): Promise<boolean> => {
        try {
            const res = await instance.get('user/userinfo');
            if (res.status !== 200) throw new Error('An error has occured');
            setUser(res.data);
            return true;
        } catch (err: any) {
            console.error(err.message);
            setError(err.message);
            return false
        } finally {
            setLoading(false);
        }
    };

    const refreshToken = async (): Promise<string | null> => {
        try {
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
            setError(err.message);
            return null
        } finally {
            setLoading(false);
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

    return { authToken, user, error, loading, login, logout, register, getUser, refreshToken };
}