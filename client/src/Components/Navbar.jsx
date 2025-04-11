
import { useState } from "react";
import { Link } from "react-router-dom";
import authStore from "../Store/auth.store";
import { FaBars, FaChevronDown } from "react-icons/fa";
const Navbar = () => {

  /** state to control the mobile screen menu */

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout} = authStore();
  
  const handleLogout = async() => {
    logout();
  }
  return (
    
      <nav className=" h-20 flex justify-between px-2 lg:px-20 xl:px-52  md:px-10  text-white items-center bg-purple-900  shadow-xl fixed w-full top-0 z-50">
      {/** ----------------------logo--------------------*/}
      <div className="flex items-center space-x-2 relative p-2">
        {" "}
        <div className="h-7 w-7 bg-yellow-300 relative">
          <div className="h-2 w-4 absolute top-3 left-0 bg-purple-800"></div>{" "}
        </div>
        <Link to="/" className="text-2xl font-bold">
          {" "}
          MoneyBank
        </Link>{" "}
      </div>
      {/**  ------------  link  --------------------------- */}
      <ul className="menu hidden lg:flex gap-10 items-center h-full">
        {/** ------------company drop down ------------------ */}
        <div className="relative group h-full">
          <div className="h-full cursor-pointer flex gap-1 items-center px-4 group-hover:bg-white group-hover:text-purple-700">
            {" "}
            Company{" "}
            <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" />{" "}
          </div>
          <ul className="absolute top-full hidden group-hover:block bg-white w-36 shadow-md text-purple-700 text-center space-y-2  p-2 z-10">
            <li>
              {" "}
              <Link
                to="/"
                className="block hover:text-purple-900 hover:bg-purple-100 rounded-md px-1 py-1"
              >
                {" "}
                About us
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/"
                className="block hover:text-purple-900 hover:bg-purple-100 rounded-md px-1 py-1"
              >
                {" "}
                Career
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/"
                className="block hover:text-purple-900 hover:bg-purple-100 rounded-md px-1 py-1"
              >
                {" "}
                Partnership{" "}
              </Link>
            </li>
          </ul>
        </div>
        {/** ------------------Service drop down----------------------- */}
        <div className="relative group h-full">
          <div className="h-full cursor-pointer flex items-center gap-1 px-4 group-hover:bg-white group-hover:text-purple-700">
            Our Services{" "}
            <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" />{" "}
          </div>
          <ul className="absolute top-full left-0  hidden group-hover:block bg-white text-purple-700 p-2  shadow-md space-y-2 w-40 text-center z-20">
            <li>
              {" "}
              <Link
                to="/"
                className="block hover:text-purple-900 hover:bg-purple-100 rounded-md px-1 py-1"
              >
                {" "}
                Loan Offers
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/"
                className="block hover:text-purple-900 hover:bg-purple-100 rounded-md px-1 py-1"
              >
                {" "}
                Savings
              </Link>
            </li>
          </ul>
        </div>
        {/**-----------------------help drop down ----------------------- */}
        <div className="relative group h-full">
          <div className="h-full cursor-pointer flex items-center gap-1 px-4 group-hover:bg-white group-hover:text-purple-700">
            {" "}
            Help{" "}
            <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
          </div>
          <div className="absolute top-full left-0  hidden group-hover:block bg-white text-purple-700 p-2  shadow-md space-y-2 w-32 text-center z-20">
            <ul className="p-2 space-y-2">
              <li>
                {" "}
                <Link
                  to="/"
                  className="block hover:text-purple-900 hover:bg-purple-100 rounded-md px-1 py-1"
                >
                  {" "}
                  Contact Us
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/"
                  className="block hover:text-purple-900 hover:bg-purple-100 rounded-md px-1 py-1"
                >
                  {" "}
                  Buy Shares{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/"
                  className="block hover:text-purple-900 hover:bg-purple-100 rounded-md px-1 py-1"
                >
                  {" "}
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ul>

      {/** ----------------------button-----------------------------*/}
      <div className="hidden md:block">
        <Link
          to="/login"
          className="btn bg-yellow-300 text-purple-800  py-2  px-4  hover:bg-yellow-200 transition-all"
        >
          {" "}
          Login
        </Link>
      </div>

    {/** ------------------------- MOBILE SCREEN---------------------- */}
      <FaBars className=" lg:hidden text-3xl cursor-pointer"  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}/>
      {mobileMenuOpen && (
  <div className="lg:hidden bg-purple-900 text-white w-full absolute top-20 left-0 px-4 py-6 space-y-4 z-40 shadow-md  transform transition-all duration-500">
    <div className="space-y-2">
      <p className="font-bold">Company</p>
      <ul className="space-y-1 pl-4 text-sm text-purple-200">
        <li><Link to="/" className="hover:text-yellow-400">About Us</Link></li>
        <li><Link to="/" className="hover:text-yellow-400">Career</Link></li>
        <li><Link to="/" className="hover:text-yellow-400">Partnership</Link></li>
      </ul>
    </div>
    <div className="space-y-2">
      <p className="font-bold">Our Services</p>
      <ul className="space-y-1 pl-4 text-sm text-purple-200">
        <li><Link to="/" className="hover:text-yellow-400">Loan Offers</Link></li>
        <li><Link to="/" className="hover:text-yellow-400">Savings</Link></li>
      </ul>
    </div>
    <div className="space-y-2">
      <p className="font-bold">Help</p>
      <ul className="space-y-1 pl-4 text-sm text-purple-200">
        <li><Link to="/" className="hover:text-yellow-400">Contact Us</Link></li>
        <li><Link to="/" className="hover:text-yellow-400">Buy Shares</Link></li>
        <li><Link to="/" className="hover:text-yellow-400">FAQs</Link></li>
      </ul>
    </div>
    <div className="pt-4">
      <Link
        to="/login"
        className="border-2  hover:bg-yellow-400 px-4 py-2 rounded-sm hover:text-purple-500 transition-all" 
      >
        Log In
      </Link>
      
      <button onClick={handleLogout}> logout </button>
    </div>
  </div>
)}

        
    </nav>
  );
};

export default Navbar;
