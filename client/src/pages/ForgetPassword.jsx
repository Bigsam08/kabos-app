import { useState, useEffect } from "react";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import authStore from "../Store/auth.store";

const ForgetPassword = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const { forgetPassword, isForgetPassword } = authStore();

  // handle navigation after email validation
  useEffect(() => {
    if (isForgetPassword) {
      navigate("/");
    }
  }, [navigate, isForgetPassword]);

  // handle backend logic submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email is required!");
    // send data to backend
    forgetPassword(email);
    setEmail("");
  };

  return (
    <div className="flex items-center w-full h-screen bg-gradient-to-r from-black to-purple-900">
      <div className="absolute gap-3 top-5 sm:left-10 p-3 hover:border-2 border-white rounded-xl transition ease-in-out duration-500 ">
        <Link to="/login" className=" flex items-center gap-3">
          {" "}
          <FaArrowLeft className="text-white sm:text-2xl" />
          <p className=" text-white"> back to login </p>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 w-300 sm:w-400 mx-auto"
      >
        <h1 className="font-bold text-xl mb-4"> Forget your Password?</h1>
        <p className="text-gray-500">
          {" "}
          Enter your registered email below to reset your password.
        </p>
        <div className="my-5 relative text-gray-500">
          <input
            type="email"
            placeholder=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="peer py-4 ps-8 border-2 w-full rounded-lg transition-all duration-500 hover:border-purple-900 focus:outline-none ease-out"
          />
          <FaEnvelope className="absolute top-5 left-2" />
          <label
            className={`absolute left-8 transition-all duration-300 bg-white px-1
                ${
                  email
                    ? "-top-3 text-sm text-purple-800"
                    : "top-4 text-base text-gray-500"
                }
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-purple-800`}
          >
            {" "}
            email
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

export default ForgetPassword;
