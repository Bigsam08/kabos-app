import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import HomeLoader from  "./Loaders/HomeLoader"
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/Dashboard";

import authStore from "./Store/auth.store";
const App = () => {
  const { userAuth, isCheckingauth, checkAuth } = authStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(userAuth)

  if ( isCheckingauth && !userAuth) {
    <HomeLoader />
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
