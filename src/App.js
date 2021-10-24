import React, { useState } from 'react';
import { AuthContext } from './auth/authContext';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home/Home';
import PrivateRoute from './PrivateRoute';
import PageTwo from './pages/Page2/Page2';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

const App = () => {
  const [isAuth, setIsAuth] = useState();

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/signup"><SignUp /></Route>
            <PrivateRoute>
              <Route exact path="/members-only"><HomePage /></Route>
              <Route exact path="/page2"><PageTwo /></Route>
            </PrivateRoute>
            <Redirect to="/login" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;