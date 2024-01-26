import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Search from './pages/Search';
import MovieInfo from './pages/MovieInfo';
import SerieInfo from './pages/SerieInfo';

function App() {
  const [results, setResults] = useState([]);
  const [userSearchInput, setUserSearchInput] = useState('');

  return (
    <>
      <AuthContextProvider>
        <Navbar
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
          <Route path="movie/:id" element={<MovieInfo />} />
          <Route path="serie/:id" element={<SerieInfo />} />
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
