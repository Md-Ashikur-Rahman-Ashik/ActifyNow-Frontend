import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { user, logInUser, googleUser, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  //   console.log(googleUser);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then(() => {
        toast("User Login Successful");

        // Navigate after login
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast("User Login Failed");
        setLoading(false);
      });

    form.reset();
  };

  const handleGoogleUser = () => {
    googleUser()
      .then(() => {
        toast("Login with Google account successful");
        setLoading(false);

        // Navigate after login
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast("User Login Failed");
        setLoading(false);
      });
  };

  return (
    <div className="hero container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <Helmet>
        <title>Login | ActifyNow</title>
      </Helmet>
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold text-blue-400 text-center">
          Please Login
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-blue-400">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-blue-400">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-blue-400 hover:scale-105 transition-transform bg-blue-50">
            Login
          </button>
        </div>
        <button
          onClick={handleGoogleUser}
          className="btn w-full mt-4 hover:scale-105 transition-transform text-blue-400 bg-blue-50"
        >
          <FaGoogle /> Login with Google
        </button>
        <p className="flex gap-1 justify-center mt-4">
          {"Don't have an account? Please"}
          <Link className="text-blue-400 font-bold" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
