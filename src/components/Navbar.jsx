import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div
        className="container mx-auto flex justify-between 
      items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent"
      >
        <span className="flex items-center space-x-2">
          <img src={assets.logo} alt="logo" className="h-8 w-8" />
          <h2 className="text-stone-300 text-lg font-semibold">HomeBuilder</h2>
        </span>
        <ul className="hidden md:flex gap-7 text-white">
          <a
            href="#Header"
            className="cursor-pointer 
            hover:text-cyan-700"
          >
            Home
          </a>
          <a
            href="#About"
            className="cursor-pointer 
            hover:text-cyan-700"
          >
            About
          </a>
          <a
            href="#Projects"
            className="cursor-pointer 
            hover:text-cyan-700"
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer 
            hover:text-cyan-700"
          >
            Testimonials
          </a>
        </ul>
        <button className="invisible bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <div className="md:hidden absolute right-6 top-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(true)}
            src={assets.menu_icon}
            className="w-7"
            alt=""
          />
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden ${
            showMobileMenu ? "fixed w-full" : "h-0 w-0"
          } right-0 top-0 
     bottom-0 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-end p-6 cursor-pointer">
            <img
              onClick={() => setShowMobileMenu(false)}
              src={assets.cross_icon}
              className="w-6"
              alt=""
            />
          </div>
          <ul
            className="flex flex-col items-center gap-2 mt-5 px-5
      text-lg font-medium"
          >
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Header"
              className="px-4 py2 rounded-full 
        inline-block"
            >
              Home
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#About"
              className="px-4 py2 rounded-full 
        inline-block"
            >
              About
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Projects"
              className="px-4 py2 rounded-full 
        inline-block"
            >
              Projects
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Testimonials"
              className="px-4 py2 rounded-full 
        inline-block"
            >
              Testimonials
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
