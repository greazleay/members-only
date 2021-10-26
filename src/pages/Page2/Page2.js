import './style.css';
import { Link } from 'react-router-dom';
import authService from '../../auth/authService';
import { useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const PageTwo = () => {

  useEffect(() => {
    authService.getCurrentUser()
  }, [])

  // axios.interceptors.request.use(async config => {
  //   const currentDate = new Date();
  //   const decodedToken = jwtDecode()
  //   if (decodedToken.exp * 1000 < currentDate.getTime()) {
  //     const data = authService.refreshToken();
  //     config.headers['authorization'] = "Bearer " + data.accessToken 
  //   }
  //   return config
  // }, (error) => {
  //   return Promise.reject(error)
  // })

  return (
    <main className="App-main">
      <p>
        Page 2
      </p>

      <Link to="/members-only" className="App-link">
        Previous Page
      </Link>
    </main>
  );
}

export default PageTwo
