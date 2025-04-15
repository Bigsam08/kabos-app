import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaLock, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import authStore from "../Store/auth.store";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, isResetPassword, validateToken, tokenValid } =
    authStore();

  // upon mount check if the token is valid or not
  useEffect(() => {
    if (token) {
      validateToken(token);
    }
  }, [token, validateToken]);

  // navigate
  useEffect(() => {
    if (tokenValid === false) {
      toast.error("Reset link is invalid or expired");
      navigate('/forget-password')
    }
  }, [navigate, tokenValid])

  // checks if the user password rest is successful
  useEffect(() => {
    if (isResetPassword) {
      navigate("/login");
    }
  }, [isResetPassword, navigate]);

  // handle submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!password || !confirmPassword)
      return toast.error("All fields required");
    if (password !== confirmPassword)
      return toast.error("Passwords do not match!");
    resetPassword(password, token);
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex items-center w-full h-screen bg-gradient-to-r from-black to-purple-900">
      <div className="absolute gap-3 top-5 sm:left-10 p-1 hover:border-2 border-white rounded-xl transition ease-in-out duration-500 ">
        <Link to="/" className=" flex items-center gap-3">
          {" "}
          <FaArrowLeft className="text-white sm:text-2xl" />
          <p className=" text-white"> back Home </p>
        </Link>
      </div>
      <form
        className="bg-white p-6 w-300 sm:w-400 mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-xl mb-4"> Reset your Password</h1>
        <p className="text-gray-500">
          {" "}
          Enter your new password, Password must be at least 8 characters long.
        </p>
        <div className="my-5 relative text-gray-500">
          <input
            type="password"
            placeholder=" "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="peer py-4 ps-8 border-2 w-full rounded-lg transition-all duration-500 hover:border-purple-900 focus:outline-none ease-out"
          />
          <FaLock className="absolute top-5 left-2" />
          <label
            className={`absolute left-8 transition-all duration-300 bg-white px-1
                ${
                  password
                    ? "-top-3 text-sm text-purple-800"
                    : "top-4 text-base text-gray-500"
                }
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-800`}
          >
            {" "}
            password
          </label>
        </div>
        <div className="my-5 relative text-gray-500">
          <input
            type="password"
            placeholder=" "
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            className="peer py-4 ps-8 border-2 w-full rounded-lg transition-all duration-500 hover:border-purple-900 focus:outline-none ease-out"
          />
          <FaLock className="absolute top-5 left-2" />
          <label
            className={`absolute left-8 transition-all duration-300 bg-white px-1
                ${
                  password
                    ? "-top-3 text-sm text-purple-800"
                    : "top-4 text-base text-gray-500"
                }
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-800`}
          >
            {" "}
            confirm password
          </label>
        </div>
        <button
          type="submit"
          className="bg-purple-900 w-full py-5 rounded-lg shadow-lg text-white hover:bg-gray-200 hover:text-black ease-in-out transition duration-300"
        >
          {" "}
          Reset Password{" "}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
