import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive (false);
      }
    };
    
  useEffect(()=> {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
      <div className="w-full flex justify-center md:justify-start">
        <h1 className="text-center md:text-left text-3xl font-bold bg-white text-black p-1 md:bg-transparent
        md:text-white">My Portofolio</h1>
      </div>
      <ul className={`menu flex items-center gap-4 md:gap-10 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 p-4 rounded-b-2xl transition-all duration-300 z-50 ${
          active 
          ? "top-0 opacity-100 bg-slate-900/90 text-white shadow-lg" 
          : "-top-20 opacity-0 md:opacity-100 md:top-0 md:bg-transparent md:text-white"
        }`}>
        <li>
          <a href="#home" className="sm:text-lg font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="sm:text-lg font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="sm:text-lg font-medium">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="sm:text-lg font-medium">
            Contact
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar