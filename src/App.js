import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import { PrivateRoute } from './PrivateRoute';
import PageOne from './pages/Page1';
import PageTwo from './pages/Page2';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { ProvideAuth } from './context/use-auth';

const App = () => {

  return (
    <ProvideAuth>
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/signin"><SignIn /></Route>
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
    </ProvideAuth>
  );
}
export default App;