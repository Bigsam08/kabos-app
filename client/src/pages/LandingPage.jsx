import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar"
const LandingPage = () => {
  return (
    <div className="relative flex items-center w-full h-screen bg-gradient-to-r from-black to-purple-900">
 
        <div className=" w-4/5 mx-auto flex items-center justify-between"> 
          <div className="text-white z-10 w-1/2">
            <h1 className="font-bold text-xl md:text-6xl ">MONEY, LOANS BUSINESS MOVE TO BIG SCALE CEO</h1>
            <p className="mb-5"> Bank that has your interest at hear, get started with us today...</p>
            <Link to="/register" className="bg-yellow-400 text-purple-700 py-3 px-6 font-medium hover:bg-white transition-all">Create account</Link>
          </div>
        </div>
        <div className="absolute w-1/2 right-20  ">
          <img src="/assets/hero-img.avif" alt="" className=" w-full object-center rounded-full animate-customBounce" />
        </div>
        <Navbar />
    </div>
  )
}

export default LandingPage