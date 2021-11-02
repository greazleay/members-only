import { useEffect, useState } from 'react';
import axios from 'axios';
import Buffer from 'buffer';
import { request } from 'http';


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
            const res = await instance.post('auth/token_renewal');
            if (res.status !== 200) throw new Error('An error has occured')
            setAuthToken(res.data.authToken);
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
            const res = await instance.get('user/userinfo');
            if (res.status !== 200) throw new Error('An error has occured');
            setUser(res.data.user);
            return user;
        } catch (err) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        }
    };

    const checkTokenValidity = async () => {
        try {
            const res = await instance.get('user/checktoken');
            if (res.status !== 200) throw new Error('An error has occured')
            setUser(res.data.user);
            return user;
        } catch (err) {
            console.error(err.message);
            setIsError(err.message);
            return null;
        }
    };

    instance.interceptors.response.use(response => {
        if (response.status === 401) refreshToken();
        return response
    }, error => {
        return Promise.reject(error)
    })

    // useEffect(() => {
    //     auth.onAuthStateChanged(user => {
    //         if (user) {
    //             setUser(user);
    //         } else {
    //             setUser(null);
    //         }
    //     });
    // }, []);

    return { authToken, user, isError, isLoading, login, logout, register, getUser, checkTokenValidity };
}
