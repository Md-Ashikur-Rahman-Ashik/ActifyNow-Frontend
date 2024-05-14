import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { signOutUser, user, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center">
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
        <div className="dropdown z-50">
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
            <div className="flex justify-center mb-4 lg:ml-20 cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                onChange={handleToggle}
                type="checkbox"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl font-bold text-blue-400">
          ActifyNow
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex ml-20 cursor-pointer mr-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
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
                  referrerPolicy="no-referrer"
                  alt="Tailwind CSS Navbar component"
                  title={user?.displayName}
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-50 p-2 shadow top-10 menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/add-volunteer-post"} className="justify-between">
                  Add Volunteer Post
                </NavLink>
              </li>
              <li>
                <NavLink to={`/manage-my-post`}>Manage My Post</NavLink>
              </li>
              <li>
                <NavLink to={`/my-volunteer-request-post`}>
                  My Volunteer Request Post
                </NavLink>
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
