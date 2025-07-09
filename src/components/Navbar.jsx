import React, { useEffect, useState } from "react";
import { ShiftingDropDown } from "./DropDown";
import "../index.css";
import "./Navbar.css";
import name from "../assets/Ajay.svg";
import { ShiftingDropDown2 } from "./DropDown2";

function Navbar() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed w-full z-20 flex justify-center items-center align-middle p-5">
      <nav className="w-[85%] shadow-lg z-50 rounded-[20px]" id="navbar">
        <div
          className="max-w-7xl mx-auto p-2 flex items-center justify-between h-16"
          data-aos="fade-in"
        >
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 px-2">
            <button
              className="text-neutral-400 font-light hover:text-neutral-100 transition duration-300"
              onClick={() => scrollToSection("About")}
            >
              About
            </button>

            <ShiftingDropDown />

            <button
              className="text-neutral-400 font-light hover:text-neutral-100 transition duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <ShiftingDropDown2 />
          </div>
          <div
            className="font-blod font-serif text-white justify-center items-center"
            onClick={() => scrollToSection("home")}
            id="tel"
          >
            <img src={name} className="w-[75%] h-[75%]" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
