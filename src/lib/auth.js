import axios from 'axios';
import Buffer from 'buffer';

const API_URL = 'https://memb-only.herokuapp.com/api/';

const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    timeout: 15000,
    // headers: {Authorization: `Bearer ${}`}
})

class AuthService {
    async login(credentials) {
        // return axios
        //     .post(API_URL + 'login', {
        //         email,
        //         password
        //     })
        //     .then(response => {
        //         if (response.data.accessToken) {
        //             localStorage.setItem('user', JSON.stringify(response.data));
        //         }

        //         return response.data;
        //     });
        try {
            const res = await instance.post('auth/login', credentials, { withCredentials: true });
            if (res.status !== 200) throw new Error('An error has occured')
            const user = await res.json();
            return user;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    async logout() {
        // localStorage.removeItem('user');
        try {
            return await instance.get('auth/logout');
        } catch (err) {
            console.error(err.message)
            return false;
        }
    }

    async signUp(name, email, password) {
        return instance.post('user/register', {
            name,
            email,
            password
        });
    }

    async getCurrentUser() {
        try {
            // const res = await axios.get(API_URL + '/user/userinfo', { headers: { authorization: 'Bearer ' } });
            const res = await instance.get('user/userinfo', { withCredentials: true });
            const data = await res.json();
            return data
        } catch (err) {
            console.error(err.message)
        }
    }

    async refreshToken() {
        
    }

    async checkTokenValidity() {
        instance.interceptors.request.use(async config => {
            const currentDate = new Date();
            const decodedToken = Buffer.from('base64')
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                const data = await this.refreshToken();
                config.headers['authorization'] = "Bearer " + data.accessToken
            }
            return config
        }, (error) => {
            return Promise.reject(error)
        })
    }
}

export default new AuthService();