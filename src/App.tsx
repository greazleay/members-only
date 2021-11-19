import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RequireAuth } from './RequireAuth';
import { PageOne } from './pages/Page1';
import { PageTwo } from './pages/Page2';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { useAuth } from './context/use-auth';
import { Layout } from './components/Layout';
import { NoMatch } from './pages/NoMatch';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

const App = () => {

  const { isError, isLoading, refreshToken } = useAuth();
  let location = useLocation();
  let navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";

  const attemptTokenRefresh = async () => {
    await refreshToken();
    if (!isError) navigate(from, { replace: true })
  }

  useEffect(() => {
    attemptTokenRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refreshingAnimation = (
    <main className="main">
      <h1>Please Wait.....</h1>
    </main>
  )

  if (isLoading) return refreshingAnimation

  return (
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
  );
}

export default App;