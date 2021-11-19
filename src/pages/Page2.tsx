import { Link } from 'react-router-dom';
import { useAuth } from '../context/use-auth';
import { useEffect } from 'react';

export const PageTwo = () => {

  const { getUser, isLoading, user } = useAuth()

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="main">
      <p>Page 2</p>
      <Link to="/page-one">
        <button>Previous Page</button>
      </Link>
      {isLoading ? <h2>LOADING...</h2> : <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <img src={user?.avatar} alt='' />
      </div>}
    </main>
  );
}
