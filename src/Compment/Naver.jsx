import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Naver = () => {
  const { logOut, users } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/login'}>Login</NavLink>
      </li>
      <li>
        <NavLink to={'/singUp'}>Registration</NavLink>
      </li>
      <li>
        <NavLink to={'/order'}>oreder</NavLink>
      </li>
      {users && (
        <>
          <li>
            <NavLink to={'/profile'}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="w-[85%] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}{' '}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {users ? (
            <>
              <span>{users.email}</span>
              <a onClick={logOut} className="btn">
                Log out
              </a>
            </>
          ) : (
            <Link
              className="btn bg-primary text-white
            "
              to={'/login'}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Naver;
