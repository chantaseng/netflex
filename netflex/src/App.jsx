import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

import Navbar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Search from './pages/Search';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
