import axios from 'axios';

const API_URL = 'https://memb-only.herokuapp.com/api';

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
            const res = await axios.post(API_URL + '/auth/login', credentials);
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
            return await axios.get(API_URL + '/auth/logout');
        } catch (err) {
            console.error(err.message)
            return false;
        }
    }

    async signUp(name, email, password) {
        return axios.post(API_URL + '/user/register', {
            name,
            email,
            password
        });
    }

    async getCurrentUser() {
        // return JSON.parse(localStorage.getItem('user'));;
        try {
            const res = await axios.get(API_URL + '/user/userinfo', { headers: { authorization: 'Bearer ' } });
            const data = await res.json();
            return data
        } catch (err) {
            console.error(err.message)
        }
    }

    async refreshToken() {
        
    }
}

export default new AuthService();