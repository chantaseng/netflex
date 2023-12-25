import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="absolute z-[100] flex w-full items-center justify-between p-4">
      <Link to="/">
        <h1 className="cursor-pointer text-4xl font-bold text-red-600">
          NETFLEX
        </h1>
      </Link>
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
    </div>
  );
}

export default Navbar;
