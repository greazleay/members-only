import React from 'react';
// import { AuthContext } from './auth/authContext';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import { PrivateRoute } from './PrivateRoute';
import PageOne from './pages/Page1';
import PageTwo from './pages/Page2';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { AuthContext2Provider } from './context/auth';

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <AuthContext2Provider>
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/signup"><SignUp /></Route>
            <Route exact path="/members-only"><HomePage /></Route>
            <PrivateRoute>
              <Route exact path="/page-one"><PageOne /></Route>
              <Route exact path="/page-two"><PageTwo /></Route>
            </PrivateRoute>
            <Redirect to="/login" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext2Provider>
    // </AuthContext.Provider>

  );
}
export default App;