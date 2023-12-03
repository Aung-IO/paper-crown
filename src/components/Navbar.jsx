import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/web-logo.png";
import { AuthContext } from "../context/AuthContext";
import useSignOut from "../hooks/useSignOut";

export default function Navbar() {
  let navigate = useNavigate();
  let { user } = useContext(AuthContext);
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Books", link: "/books" },
    { name: "Commission", link: "/commission" },
    { name: "Original Arts", link: "/origianl_arts" },
    { name: "Contact Us", link: "/contact" },
  ];

  let { logout } = useSignOut();
  let singOutUser = async () => {
    setOpen(false)
    await logout();
    navigate("/login");
  };

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex py-4 md:px-10">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ml-4"
        >
          <p className="text-lg">Paper Crown</p>
          <img src={Logo} className="w-10 -mt-4 -ml-6" />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:gap-5 md:mx-auto md:items-center md:pb-0 pb-3 absolute md:static bg-white right-3 w-[30%] pl-6 md:pl-0 md:w-auto transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-2">
              <Link
                onClick={() => setOpen(false)}
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-300 hover:underline focus:text-blue-600"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <div className="md:gap-4 mt-2 md:mt-0 md:flex md:ml-4 space-y-3 md:space-y-0 ">
            {!!user && (
              <Link to="/create" onClick={() => setOpen(false)}>
                <button className="text-sm md:text-base bg-white hover:bg-gray-100 text-gray-800  py-1 px-3  border border-gray-400 rounded shadow">
                  Add books
                </button>
              </Link>
            )}
            {!user && (
              <Link to="/login" onClick={() => setOpen(false)}>
                <button className=" bg-white hover:bg-gray-100 text-gray-800  py-1 px-3  border border-gray-400 rounded shadow">
                  Login
                </button>
              </Link>
            )}
            {!!user && (
              <button
                onClick={singOutUser}
                className="text-sm md:text-base bg-white hover:bg-gray-100 text-gray-800  py-1 px-3  border border-gray-400 rounded shadow"
              >
                Logout
              </button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}
