import './style.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="App-main">
      <p>
        Page 1
      </p>

      <Link to="/page2" className="App-link">
        Next Page
      </Link>
    </main>
  );
}

export default HomePage
