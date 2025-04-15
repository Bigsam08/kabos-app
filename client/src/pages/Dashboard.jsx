import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../DashComponents/sidebar";
import DashNavbar from "../DashComponents/DashNavbar";
import DashboardHome from "../DashComponents/DashboardHome";
import DashboardSettings from "../DashComponents/dashBoardSettings";
import DashboardLoans from "../DashComponents/DashboardLoans";
import DashboardAccount from "../DashComponents/DashboardAccount";
import DashboardWallet from "../DashComponents/DashboardWallet";
import DashboardTransaction from "../DashComponents/DashboardTransaction"
import DashboardMessage from "../DashComponents/DashBoardMessage";
import DashboardContact from "../DashComponents/DashboardContact"



const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen flex overflow-hidden">
      {/**  nav bar at the top */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex flex-1 flex-col w-full">
        {/**  main body  */}
        <DashNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/**  main content the body display */}
        <div className="flex-1 bg-gray-100 p-6 overflow-hidden">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="settings" element={<DashboardSettings />} />
            <Route path="loans" element={<DashboardLoans />} />
            <Route path="account" element={<DashboardAccount />} />
            <Route path="wallet" element={<DashboardWallet />} />
            <Route path="transactions" element={<DashboardTransaction />} />
            <Route path="messages" element={<DashboardMessage />} />
            <Route path="contact" element={<DashboardContact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
