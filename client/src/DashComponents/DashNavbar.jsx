
import { FaSearch } from "react-icons/fa";
const DashNavbar = () => {
  return (
    <div className="h-16 w-full flex items-center justify-between shadow-lg md:px-6 px-1">
      <h1 className="hidden sm:block font-bold md:ps-3 me-1 text-sm md:text-2xl"> Dashboard</h1>
      {/**------------- search bar ---------------- */}
      <div className="relative md:w-80">
          <input type="search" placeholder="Search" className="w-full ps-8 text-gray-500 border-2 rounded-lg hover:border-purple-900 outline-none" />
          < FaSearch className="text-gray-300 absolute top-2 md:top-2 left-3"/>
      </div>
      {/** ---------------  profile picture ----------------------- */}
      <div className="h-full flex gap-1 items-center p-2">
      <span className="h-2 w-2 bg-green-500 rounded-full"></span>
        <h1 className="text-sm ">  Samuel</h1>
        <img
          src="/assets/dp.jpeg"
          alt="display picture"
          className="bg-white h-10 w-10 md:w-16 object-contain border-2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default DashNavbar;
