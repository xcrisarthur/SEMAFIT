import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Image/LogoSema.png";

const NavigationBar = ({ navNalue }) => {
  const navigate = useNavigate();
  return (
    <>
      <header
        aria-label="Site Header"
        id="navbar"
        className="shadow-sm sticky top-0 z-50 bg-white "
      >
        <div className="mx-auto max-w-screen-xl p-4 ">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex lg:w-0 lg:flex-1">
            <button
                className="inline-block w-10 lg:hidden"
                onClick={() => navigate("/")}
              >
                <img srcSet={Logo} alt="*Disini logo" />
              </button>
              <h1 className="text-2xl font-medium ps-5"> S E M A F I T</h1>
            </div>

            <div
              aria-label="Site Nav"
              className="hidden gap-8 text-sm font-medium lg:flex"
            >
              <button className="my-auto hover:text-gray-600" onClick={() => navigate("/aspirform")}>
              Aspiration Form 
              </button>
              <button className="my-auto hover:text-gray-600" onClick={() => navigate("/about")} >
                Profile
              </button>
              <button className="my-auto hover:text-gray-600" onClick={() => navigate("/")} >
                Home
              </button>
              <button
                className="inline-block sm:w-14"
                id="logo"
                onClick={() => navigate("/")}
              >
                <img srcSet={Logo} alt="*Disini logo" />
              </button>
              <button className="my-auto hover:text-gray-600" onClick={() => navigate("/events")}>Events</button>
              <button className="my-auto hover:text-gray-600" onClick={() => navigate("/merchandise")}>Merchandise</button>
              <button className="my-auto hover:text-gray-600" onClick={() => navigate("/article")}>Article</button>
            </div>

            <div className="flex-1 items-center justify-end gap-4 flex">
              <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white" onClick={() => navigate("/contactus")}>
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-100 lg:hidden">
            <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
              <button className="my-auto hover:text-gray-600 flex-shrink-0 pl-4 text-gray-900 max-[430px]:ms-20 max-[320px]:ms-44">
              Aspiration Form 
              </button>
              <button className="my-auto hover:text-gray-600 flex-shrink-0 pl-4" onClick={() => navigate("/about")} >
                Profile
              </button>
              <button className="my-auto hover:text-gray-600 flex-shrink-0 pl-4" onClick={() => navigate("/")} >
                Home
              </button>
              <button className="my-auto hover:text-gray-600 flex-shrink-0 pl-4">Events</button>
              <button className="my-auto hover:text-gray-600 flex-shrink-0 pl-4">Merchandise</button>
              <button className="my-auto hover:text-gray-600 flex-shrink-0 pl-4">Article</button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
