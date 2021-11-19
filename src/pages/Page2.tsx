import { Link } from 'react-router-dom';
import { useAuth } from '../context/use-auth';
import { useEffect } from 'react';

export const PageTwo = () => {

  const { getUser, isLoading, refreshToken, user } = useAuth()

  useEffect(() => {
    getUser()
  }, [getUser]);

  return (
    <main className="main">
      <p>Page 2</p>
      <Link to="/page-one">
        <button>Previous Page</button>
      </Link>
      <button onClick={refreshToken}>Get New Token</button>
      {isLoading ? <h2>LOADING...</h2> : <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <img src={user?.avatar} alt='' />
      </div>}
    </main>
  );
}
