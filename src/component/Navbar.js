import React from "react";
import Logo from "../assets/Logo3.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = React.useState(false);

  const handleClick = () => setNav(!nav);

  const email = process.env.REACT_APP_PERSONAL_EMAIL;

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#363534] text-gray-200 shadow-md shadow-gray-900">
      <div className="pt-2">
        <img src={Logo} alt="/" style={{ width: "160px" }} />
      </div>
      {/* menu */}

      <ul className=" hidden md:flex">
        <li>
          <Link to="home" smooth={true} offset={30} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={70} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-50} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} offset={-150} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={30} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#363534] flex flex-col justify-center items-center md:hidden"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            offset={80}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            offset={80}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            offset={80}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            offset={80}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={80}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://www.linkedin.com/in/william-r-vines/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1c1b1b]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://github.com/wrvines"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              onClick={() =>
                (window.location = "mailto:william.r.vines@gmail.com")
              }
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://docs.google.com/document/d/1L8hrq0V8ymbPr2xs2gw5NBNvOjPLSZ8P/edit?usp=sharing&ouid=113887069856856175037&rtpof=true&sd=true"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
