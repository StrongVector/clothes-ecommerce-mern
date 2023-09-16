import React from "react";
import mobileBanner from "./../../assets/HeroMobile.jpg";
import desktopBanner from "./../../assets/HeroImage.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate("/shop/shirts");
  };
  return (
    <>
      <section className="hero-section flex justify-center w-screen">
        <div className="h-[550px] mx-5 my-4 relative md:mx-9 md:mt-6 md:mb-5 xl:h-[550px] w-full max-w-7xl">
          {/* Mobileview Image */}
          <img
            className="w-full h-full object-cover rounded-[10px] border border-gray-300 md:hidden"
            src={mobileBanner}
            alt="HeroImage"
          />
          {/* Desktopview Image */}
          <img
            className="hidden md:flex h-full w-full object-cover rounded-2xl "
            src={desktopBanner}
            alt="HeroImage"
          />
          <div className="absolute w-full h-full top-0 rounded-[10px] bg-black bg-opacity-50 md:rounded-2xl">
            {/* Mobileview */}
            <div className="top-0 pt-60 pl-3 text-3xl font-Poppins text-white font-semibold sm:hidden">
              Where Comfort <br /> Meets Style , <br />
              Your Everyday <br />
              Fashion Hub. <br />
              <button
                className="px-6 py-3 mt-3 bg-white text-black text-xl font-normal uppercase border-white rounded-md"
                onClick={navigateToShop}
              >
                Shop Now
              </button>
            </div>
            {/* Desktopview */}
            <div className="hidden sm:flex sm:text-center justify-center items-center flex-col top-0 pt-56 pl-3 font-Poppins text-white font-semibold lg:pt-52 xl:pt-40">
              <span className=" md:flex text-4xl pb-2 lg:text-5xl xl:pb-5 xl:text-6xl">
                Where Comfort Meets{" "}
              </span>
              <span className="md:flex text-4xl pb-2 lg:text-5xl xl:pb-5 xl:text-6xl">
                Style Your Everyday Fashion Hub.
              </span>
              <button
                className="px-9 py-3 mt-6 bg-white text-black text-xl font-normal uppercase border-white rounded-md lg:py-4 xl:mt-7 xl:px-10"
                onClick={navigateToShop}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
