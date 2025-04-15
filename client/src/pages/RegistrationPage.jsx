import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { FaEnvelope, FaLock, FaUser, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import authStore from "../Store/auth.store";

const RegistrationPage = () => {
  const data = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const [userData, setUserData] = useState(data);
  const { signup, signedUp } = authStore();
  const navigate = useNavigate();

  // get user inputs
  const getValue = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // handle navigation after user has signed up
  useEffect(() => {
    if (signedUp) {
      navigate("/login");
    }
  }, [signedUp, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // confirms if password and confirm password are the same
    if (userData.password !== userData.confirmPassword)
      return toast.error("Passwords do not match");
    // makes sure user checks the policy box
    if (!userData.terms)
      return toast.error("Accept terms and policy to continue");
    // use zustand global state to send request
    signup(userData);
  };
  return (
    <div className="flex items-center w-full h-screen bg-gradient-to-r from-black to-purple-900">
      <div className="absolute gap-3 top-5 sm:left-10 p-3 hover:shadow-xl shadow-white hover:bg-purple-900 rounded-xl transition ease-in-out duration-500 ">
        <Link to="/login" className=" flex items-center gap-3">
          {" "}
          <FaArrowLeft className="text-white sm:text-2xl" />
          <p className=" text-white"> back to login </p>
        </Link>
      </div>
      <div className="bg-white p-6 w-300 sm:w-400 mx-auto">
        <h1 className="text-2xl mb-8"> Create new account</h1>
        {/** login form box---------------------- */}
        <form className="relative flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="fullName">FullName</label>
          <FaUser className="absolute top-12 left-2 text-gray-500" />
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            onChange={getValue}
            value={userData.fullName}
            className="px-7 py-4 border-solid border-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="email">Email</label>
          <FaEnvelope className="absolute top-36 left-2 text-gray-500" />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="enter your email"
            onChange={getValue}
            value={userData.email}
            className="px-7 py-4 border-solid border-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {/**     phone number  */}
          <label
            htmlFor="phoneNumber"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <PhoneInput
            inputProps={{
              id: "phoneNumber",
              name: "phoneNumber",
              autoComplete: "off",
            }}
            country={"ng"}
            value={userData.phoneNumber}
            onChange={(phone) =>
              getValue({ target: { name: "phoneNumber", value: phone } })
            }
            containerClass="w-full"
            inputClass="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-md mb-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="password ">Password</label>
          <FaLock className="absolute bottom-56 left-2 text-gray-500" />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="enter your password..."
            onChange={getValue}
            value={userData.password}
            className="px-7 py-4 border-solid border-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <FaLock className="absolute bottom-32 left-2 text-gray-500" />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="confirm your password..."
            onChange={getValue}
            value={userData.confirmPassword}
            className="px-7 py-4 border-solid border-2 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="policies" className="mb-5">
            {" "}
            <input
              id="policies"
              type="checkbox"
              onChange={getValue}
              checked={userData.terms}
              name="terms"
              className="mr-1"
            />{" "}
            accept terms and Policies
          </label>
          <button type="submit" className="bg-purple-800 py-4 hover:bg-purple-400 rounded-md">
            {" "}
            Create account{" "}
          </button>
        </form>
        <p className="mx-auto text-center mt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-700 hover:underline hover:opacity-90"
          >
            {" "}
            sign In
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
