import { Link } from 'react-router-dom';
import { useAuth } from '../context/use-auth';
import { useEffect } from 'react';

const PageTwo = ({ location }) => {

  const { getUser, isLoading, refreshToken, user } = useAuth()

  useEffect(() => {
    (async () => await getUser())();
  }, []);

  return (
    <main className="main">
      <p>Page 2</p>
      <Link to="/page-one">
        <button>Previous Page</button>
      </Link>
      <button onClick={refreshToken}>Get New Token</button>
      {isLoading ? <p>Loading...</p> : <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <img src={user?.avatar} alt='' />
      </div>}
    </main>
  );
}

export default PageTwo
