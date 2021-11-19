import { Link } from "react-router-dom";

export const NoMatch = () => {
    return (
        <main className="main">
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </main>
    );
}