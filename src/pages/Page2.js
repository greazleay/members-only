import { Link } from 'react-router-dom';
import auth from '../lib/auth';
import { useEffect } from 'react';

const PageTwo = ({ location }) => {

  useEffect(() => {
    auth.getCurrentUser()
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

  console.log(location)

  return (
    <main className="main">
      <p>Page 2</p>
      <Link to="/page-one">
        <button>Previous Page</button>
      </Link>
    </main>
  );
}

export default PageTwo
