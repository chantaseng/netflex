import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email);

  const handleLogout = async function () {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute z-[100] flex w-full items-center justify-between p-4">
      <Link to="/">
        <h1 className="cursor-pointer text-4xl font-bold text-red-600">
          NETFLEX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4 text-white">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="cursor-pointer rounded bg-red-600 px-6 py-2 text-white"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4 text-white">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="cursor-pointer rounded bg-red-600 px-6 py-2 text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
