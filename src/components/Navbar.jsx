import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img className="w-[50px]" src={Logo} alt="" />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden z-10 cursor-pointer"
      >
        {nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={`${
          nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center"
        }`}
      >
        <li className="py-6 text-2xl">Home</li>
        <li className="py-6 text-2xl">About</li>
        <li className="py-6 text-2xl">Skills</li>
        <li className="py-6 text-2xl">Work</li>
        <li className="py-6 text-2xl">Contact</li>
      </ul>

      {/* social icons */}
      <div className="fixed flex  top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
