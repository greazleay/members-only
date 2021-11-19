import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RequireAuth } from './RequireAuth';
import { PageOne } from './pages/Page1';
import { PageTwo } from './pages/Page2';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { ProvideAuth } from './context/use-auth';
import { Layout } from './components/Layout';
import { NoMatch } from './pages/NoMatch';

const App = () => {

  return (
    <ProvideAuth>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/page-one" element={
            <RequireAuth>
              <PageOne />
            </RequireAuth>
          }
          />
          <Route
            path="/page-two"
            element={
              <RequireAuth>
                <PageTwo />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ProvideAuth>
  );
}

export default App;