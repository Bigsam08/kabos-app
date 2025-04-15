import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authStore from "../Store/auth.store";
import { FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";

const Login = () => {
  // set an empty object to get user input
  const details = { email: "", password: "" };

  // using react state management to handle the user inputs
  // authstore from zustand store to handle api and auth process
  const [data, setData] = useState(details);
  const { login, loggedIn } = authStore();

  // set a react effect to handle reactions from zustand to navigate if success
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, [loggedIn, navigate]);

  // handle event change to get user details
  const getValue = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle the authentication process
  const handleSubmit = (e) => {
    e.preventDefault();
    // using global state send user details to backend
    login(data);
  };

  // return jsx
  return (
    <div className="flex items-center w-full h-screen bg-gradient-to-r from-black to-purple-900">
      <div className="absolute gap-3 top-5 sm:left-10 p-3 hover:border-2 border-white rounded-xl transition ease-in-out duration-500 ">
        <Link to="/" className=" flex items-center gap-3">
          {" "}
          <FaArrowLeft className="text-white sm:text-2xl" />
          <p className=" text-white"> back Home </p>
        </Link>
      </div>
      <div className="bg-white p-6 w-300 sm:w-400 mx-auto">
        <h1 className="text-2xl mb-8"> Sign Into your account</h1>
        {/** login form box---------------------- */}
        <form className="relative flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <FaEnvelope className="absolute top-12 left-2" />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="enter your email"
            onChange={getValue}
            value={data.email}
            className="px-7 py-4 border-solid border-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="password">Password</label>
          <FaLock className="absolute top-36 left-2" />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="enter your password..."
            onChange={getValue}
            value={data.password}
            className="px-7 py-4 border-solid border-2 mb-5 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Link
            to="/forget-password"
            className="text-end mb-5 hover:underline text-purple-800"
          >
            {" "}
            forget Password
          </Link>
          <button type="submit" className="bg-purple-800 py-4 hover:bg-purple-400 mb-5">
            {" "}
            Log In{" "}
          </button>{" "}
          <hr />
        </form>
        <p className="mx-auto text-center mt-3 text-sm">
          Don&#39;t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-700 hover:underline hover:opacity-90"
          >
            {" "}
            Create account
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
