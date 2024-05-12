import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { user, registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!/^(?=.*?[A-Z])/.test(password)) {
      toast("Your password should at least have one Uppercase letter");
      return;
    } else if (!/^(?=.*?[a-z])/.test(password)) {
      toast("Your password should at least have one lowercase letter");
      return;
    } else if (password.length < 6) {
      toast("Your password should have minimum 6 characters");
      return;
    }

    registerUser(email, password)
      .then((result) => {
        toast("User Registration Successful");
        updateProfile(result.user, {
          photoURL: photo,
        });
        form.reset();
        navigate("/");
      })
      .catch(() => {
        toast("User Registration Failed");
      });
  };

  return (
    <div className="hero container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <Helmet>
        <title>Register | ActifyNow</title>
      </Helmet>
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold text-blue-400 text-center">
          Please Register
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-blue-400">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
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
            <span className="label-text font-bold text-blue-400">
              Photo URL
            </span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            name="photo"
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
            Register
          </button>
        </div>
        <p className="flex gap-1 justify-center mt-4">
          {"Already have an account? Please"}
          <Link className="text-blue-400 font-bold" to="/register">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
