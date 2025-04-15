import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import HomeLoader from  "./Loaders/HomeLoader"
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/RegistrationPage";

import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";

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
        <Route path="/" element={!userAuth ? <LandingPage /> : <Navigate to="/dashboard"/>} />
        <Route path="/login" element={!userAuth ? <LoginPage /> : <Navigate to="/dashboard"/>} />
        <Route path="/register" element={!userAuth ? <RegistrationPage /> : <Navigate to="/dashboard"/>} />
        <Route path="/dashboard/*" element={userAuth ? <DashboardPage /> : <Navigate to="/"/>} />
        <Route path="/forget-password" element={!userAuth ? <ForgetPassword /> : <Navigate to="/login"/>} />
        <Route path="/reset-password/:token" element={!userAuth ? <ResetPassword /> : <Navigate to="/dashboard"/>} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
