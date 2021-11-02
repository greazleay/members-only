import { useState } from 'react';
import axios from 'axios';

export const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)

    const API_URL = 'https://memb-only.herokuapp.com/api/';

    const instance = axios.create({
        baseURL: API_URL,
        withCredentials: true,
        timeout: 15000,
        headers: { Authorization: `Bearer ${authToken}` }
    });

    const login = async ({ email, password }) => {
        try {
            setIsLoading(true)
            const res = await instance.post('auth/login', { email, password });
            if (res.status !== 200) throw new Error('An error has occured');
            setAuthToken(res.data.authToken);
            setIsLoading(false);
            return authToken;
        } catch (err) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        }
    };

    const logout = async () => {
        try {
            await instance.get('auth/logout');
            setAuthToken(null);
            return true;
        } catch (err) {
            console.error(err.message)
            setIsError(err.message);
            return null;
        }
    };

    const refreshToken = async () => {
        try {
            setIsLoading(true);
            const res = await instance.post('auth/token_renewal');
            console.log('++====++', 'I was called!!!');
            if (res.status !== 200) throw new Error('An error has occured')
            setAuthToken(res.data.authToken);
            setIsLoading(false);
            return authToken;
        } catch (err) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        }
    }

    const register = async ({ email, password, name }) => {
        try {
            const res = await instance.post('auth/register', { email, password, name });
            if (res.status !== 200) throw new Error('An error has occured')
            setUser(res.data.user);
            return user;
        } catch (err) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        }
    };

    const getUser = async () => {
        try {
            setIsLoading(true)
            const res = await instance.get('user/userinfo');
            if (res.status !== 200) throw new Error('An error has occured');
            setUser(res.data);
            setIsLoading(false);
            return user;
        } catch (err) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        }
    };

    instance.interceptors.response.use(
        (res) => {
            return res;
        },
        async (err) => {
            const originalConfig = err.config;

            if (err.response) {
                // Access Token was expired
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;

                    try {
                        const newToken = await refreshToken();
                        instance.options.headers.Authorization = `Bearer ${newToken}`;
                        return instance(originalConfig);
                    } catch (_error) {
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