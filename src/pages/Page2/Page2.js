import './style.css';
import { Link } from 'react-router-dom';

const PageTwo = () => {
  return (
    <main className="App-main">
      <p>
        Page 2
      </p>

      <Link to="/" className="App-link">
        Previous Page
      </Link>
    </main>
  );
}

export default PageTwo
