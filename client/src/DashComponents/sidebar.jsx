import {
  FaExchangeAlt,
  FaChartLine,
  FaEnvelopeOpen,
  FaCog,
  FaWallet,
  FaTachometerAlt,
  FaPhoneAlt,
  FaMoneyBill,
  FaHome,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  // Define an active style class
  const activeClass = "bg-yellow-400 text-purple-900 rounded-md";
  return (
    <>
      <div className=" hidden md:block w-52 h-full p-2 bg-purple-900 text-white  cursor-pointer">
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
        {/* ---------------- main menu ------------------------ */}
        <p className="my-7"> Main Menu</p>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 text-md my-4 p-2 transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-400 text-purple-900 rounded-md"
                    : "text-gray-700 hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md"
                }`
              }
            >
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/account"
              className={({ isActive }) =>
                `flex items-center gap-2 text-md my-4 p-2 transition-all duration-300 ${
                  isActive
                    ? activeClass
                    : "hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md"
                }`
              }
            >
              <FaChartLine /> Account Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/transactions"
              className={({ isActive }) =>
                `flex items-center gap-2 text-md my-4 p-2 transition-all duration-300 ${
                  isActive
                    ? activeClass
                    : "hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md"
                }`
              }
            >
              <FaExchangeAlt /> Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/wallet"
              className={({ isActive }) =>
                `flex items-center gap-2 text-md my-4 p-2 transition-all duration-300 ${
                  isActive
                    ? activeClass
                    : "hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md"
                }`
              }
            >
              <FaWallet /> Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/loans"
              className={({ isActive }) =>
                `flex items-center gap-2 text-md my-4 p-2 transition-all duration-300 ${
                  isActive
                    ? activeClass
                    : "hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md"
                }`
              }
            >
              <FaMoneyBill /> My Loans
            </NavLink>
          </li>
        </ul>

        {/* ------------------others ------------------ */}
        <p className="my-7"> Others </p>
        <ul>
          <li>
            <NavLink
              to="/dashboard/contact"
              className={({ isActive }) =>
                `flex items-center gap-2 text-md my-4 p-2 transition-all duration-300 ${
                  isActive
                    ? activeClass
                    : "hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md"
                }`
              }
            >
              <FaPhoneAlt /> Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/messages"
              className={({ isActive }) =>
                `flex items-center gap-2 text-md my-4 p-2 transition-all duration-300 ${
                  isActive
                    ? activeClass
                    : "hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md"
                }`
              }
            >
              <FaEnvelopeOpen /> Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `flex items-center gap-2 text-md my-4 p-2 transition-all duration-300 ${
                  isActive
                    ? activeClass
                    : "hover:bg-yellow-400 hover:text-purple-900 hover:rounded-md"
                }`
              }
            >
              <FaCog /> Settings
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-purple-900 text-white flex justify-around items-center h-14 z-50">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full px-3 text-sm transition-all duration-300 ${
              isActive
                ? "bg-yellow-300 text-purple-900"
                : "hover:bg-yellow-300 hover:text-purple-900"
            }`
          }
        >
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/dashboard/wallet"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full px-3 text-sm transition-all duration-300 ${
              isActive
                ? "bg-yellow-300 text-purple-900"
                : "hover:bg-yellow-300 hover:text-purple-900"
            }`
          }
        >
          <FaWallet />
          <span>My Wallet</span>
        </NavLink>

        <NavLink
          to="/dashboard/transactions"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full px-3 text-sm transition-all duration-300 ${
              isActive
                ? "bg-yellow-300 text-purple-900"
                : "hover:bg-yellow-300 hover:text-purple-900"
            }`
          }
        >
          <FaMoneyBill />
          <span>Send</span>
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full px-3 text-sm transition-all duration-300 ${
              isActive
                ? "bg-yellow-300 text-purple-900"
                : "hover:bg-yellow-300 hover:text-purple-900"
            }`
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
