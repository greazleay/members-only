import axios from 'axios';

const API_URL = 'http://localhost:3000/api/';

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
            const res = await axios.post(API_URL + 'auth/login', credentials);
            if (res.status !== 200) throw new Error('')
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
            return await axios.get(API_URL + 'auth/logout');
        } catch (err) {
            console.error(err.message)
            return false;
        }
    }

    async signUp(name, email, password) {
        return axios.post(API_URL + 'user/register', {
            name,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();