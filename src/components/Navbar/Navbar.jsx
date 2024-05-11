import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { signOutUser, user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"} className={"font-bold"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/need-volunteer"} className={"font-bold"}>
          Need Volunteer
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink className="font-bold" to="/register">
            Register
          </NavLink>
        </li>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <div className="navbar bg-base-100 container p-6 mx-auto">
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
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl font-bold text-blue-400">
          ActifyNow
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end dropdown flex justify-normal">
        {user ? (
          <div className="dropdown dropdown-end flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  title={user.displayName}
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-50 p-2 shadow top-10 menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/add-volunteer-post"} className="justify-between">
                  Add Volunteer
                </NavLink>
              </li>
              <li>
                <NavLink to={"/manage-my-post"}>Manage My Post</NavLink>
              </li>
            </ul>
            <span className="btn btn-ghost font-bold" onClick={handleSignOut}>
              LogOut
            </span>
          </div>
        ) : (
          <NavLink to="/login" className="btn-ghost btn font-bold">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
