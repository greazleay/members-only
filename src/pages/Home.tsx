import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="main">
      <p>
        Home Page
      </p>
      <Link to="/page-one" className="App-link">
        Protected Page 1
      </Link>
      <Link to="/page-two" className="App-link">
        Protected Page 2
      </Link>
    </main>
  );
}

export default HomePage
