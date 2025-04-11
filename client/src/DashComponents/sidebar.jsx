import {
  FaExchangeAlt,
  FaChartLine,
  FaEnvelopeOpen,
  FaCog,
  FaWallet,
  FaTachometerAlt,
  FaPhoneAlt,
  FaMoneyBill,
  FaHome
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
    <div className=" hidden md:block w-64 h-full p-2 bg-purple-800 text-white  cursor-pointer">
      {/** -------------------logo ----------------------- */}
      <div className="my-5 flex gap-2">
        <div className="h-7 w-7 bg-yellow-300 relative">
          <div className="h-2 w-4 absolute top-3 left-0 bg-purple-800"></div>{" "}
        </div>
        <Link to="/dashboard" className="text-2xl font-bold">
          {" "}
          MoneyBank
        </Link>{" "}
      </div>
      {/**---------------- main menu ------------------------ */}
      <p className="my-7"> Main Menu</p>
      <ul>
        <Link to="/dashboard" className="flex items-center gap-2 text-xl my-4 p-2 bg-yellow-400 text-purple-900  hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md transition-all duration-300">
          {" "}
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/dashboard/account" className="flex items-center gap-2 text-xl my-4 p-2  hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md transition-all duration-300">
          {" "}
          <FaChartLine /> Account Overview
        </Link>
        <Link  to="/dashboard/transactions" className="flex items-center gap-2 text-xl my-4 p-2  hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md transition-all duration-300">
          {" "}
          <FaExchangeAlt /> Transactions
        </Link>
        <Link  to="/dashboard/wallet" className="flex items-center gap-2 text-xl my-4 p-2  hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md transition-all duration-300">
          {" "}
          <FaWallet /> Wallet{" "}
        </Link >
        <Link  to="/dashboard/loans" className="flex items-center gap-2 text-xl my-4 p-2  hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md transition-all duration-300">
          {" "}
          <FaMoneyBill /> My Loans
        </Link>
      </ul>
      {/**------------------others ------------------ */}
      <p className="my-7"> Others </p>
      <ul>
        <Link  to="/dashboard/contact" className="flex items-center gap-2 text-xl my-4 p-2  hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md transition-all duration-300">
          {" "}
          <FaPhoneAlt /> Contact
        </Link>
        <Link  to="/dashboard/messages" className="flex items-center gap-2 text-xl my-4 p-2  hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md transition-all duration-300">
          {" "}
          <FaEnvelopeOpen /> Messages
        </Link>
        <Link  to="/dashboard/settings" className="flex items-center gap-2 text-xl my-4 p-2  hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md transition-all duration-300">
          {" "}
          <FaCog /> Settings{" "}
        </Link>
      </ul>
      </div>
      {/** ------------------ mobile screens------------- */}
      <div className=" md:hidden fixed bottom-0 left-0 right-0 bg-purple-900 text-white  flex justify-around items-center h-14 z-50">
        <Link  to="/dashboard" className="flex flex-col items-center justify-center h-full px-3 text-sm hover:bg-yellow-300 hover:text-purple-900 transition-all duration-500">
          <span> <FaHome /></span>
          <span>Home</span>
        </Link>
        <Link  to="/dashboard/wallet" className="flex flex-col h-full justify-center items-center text-sm  hover:bg-yellow-300 hover:text-purple-900 transition-all duration-500">
          <span> <FaWallet /></span>
          <span>My Wallet</span>
        </Link>
        <Link  to="/dashboard/transactions" className="flex flex-col items-center justify-center text-sm h-full px-3  hover:bg-yellow-300 hover:text-purple-900 transition-all duration-500">
          <span><FaMoneyBill /></span>
          <span>Send</span>
        </Link>
        <Link  to="/dashboard/settings" className="flex flex-col items-center justify-center text-sm h-full  hover:bg-yellow-300 hover:text-purple-900 transition-all duration-500">
          <span> <FaCog /></span>
          <span>Settings</span>
        </Link>
      </div>
   
    </>
  );
};

export default Sidebar;
