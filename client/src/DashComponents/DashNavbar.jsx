import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const DashNavbar = () => {
  // control nav options

  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };

  const handleLogout = () => {

  }


  return (
    <div className="relative h-16 w-full flex items-center justify-between shadow-lg md:px-6 px-1">
      <h1 className="hidden sm:block font-bold md:ps-3 me-1 text-sm md:text-xl">
        {" "}
        Dashboard
      </h1>
      {/**------------- search bar ---------------- */}
      <div className="relative md:w-80">
        <input
          type="search"
          placeholder="Search"
          className="w-full ps-8 text-gray-500 border-2 rounded-lg hover:border-purple-900 outline-none"
        />
        <FaSearch className="text-gray-300 absolute top-2 md:top-2 left-3" />
      </div>
      {/** ---------------  profile picture ----------------------- */}
      <div className="h-full flex gap-2 items-center p-2">
        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
        <button
          className="text-sm font-bold  text-purple-900"
          onClick={handleDrop}
        >
          {" "}
          Samuel
        </button>
        <img
          src="/assets/dp.jpeg"
          alt="display picture"
          className="bg-white h-10 w-10 md:w-16 object-contain border-2 rounded-lg"
        />
      </div>
      {/**------ toggle menu drop down---------------- */}
      {drop && (
        <ul className="flex flex-col absolute right-0 w-36 md:w-48 p-2 -bottom-20 bg-white shadow-lg rounded-sm text-purple-900 z-10">
          <li>
            <Link
              to="/dashboard/settings"
              onClick={() => setDrop(false)}
              className="block py-1 ps-3 hover:bg-purple-900 hover:text-yellow-400 rounded-lg transition ease-in duration-200"
            >
              Profile
            </Link>
          </li>
          <li>
            <button
              onClick={ () => {
                handleLogout();
                setDrop(false);
              }
              } 
              className="w-full text-left py-1 ps-3 my-2 rounded-lg hover:bg-purple-900 hover:text-yellow-400"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DashNavbar;
