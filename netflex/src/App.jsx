import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

// import Navbar from './components/NavBar';
import Navbar1 from './components/NavBar1';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Search from './pages/Search';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';
import MovieInfo from './components/MovieInfo';

function App() {
  const [results, setResults] = useState([]);
  const [userSearchInput, setUserSearchInput] = useState('');

  return (
    <>
      <AuthContextProvider>
        <Navbar1
          setResults={setResults}
          userSearchInput={userSearchInput}
          setUserSearchInput={setUserSearchInput}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/search"
            element={
              <Search
                results={results}
                userSearchInput={userSearchInput}
                setUserSearchInput={setUserSearchInput}
              />
            }
          />
          <Route path="/movie-details" element={<MovieInfo />} />
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
