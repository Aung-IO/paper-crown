import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const createBook = () => {
    let path = "/create";
    navigate(path);
  };
  const loginForm = () => {
    let path = "/login";
    navigate(path);
  };

  let [search, setSearch] = useState("");

  let handleSearch = (e) => {
    e.preventDefault();
    navigate(`/books${search ? `?search=${search}` : ""}`);
    setSearch("");
  };

  let Links = [
    { name: "Home", link: "/" },
    { name: "Books", link: "/books" },
    { name: "Commission", link: "/commission" },
    { name: "Original Arts", link: "/origianl_arts" },
    { name: "FAQs", link: "/faqs" },
    { name: "Contact Us", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fiex top-0 left-0">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <p className="text-lg">Paper Crown</p>
          <img src="../src/assets/web-logo.png" className="w-10 -mt-4 -ml-6" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:gap-5 md:mx-auto md:items-center md:pb-0 pb-3 absolute md:static bg-white right-0 w-[30%] pl-6 md:pl-0 md:w-auto transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-2">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-300 hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="flex md:pl-6">
            <input
              type="text"
              placeholder="search books..."
              className="outline-none md:w-32 w-36"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </li>
        </ul>
        <div className="flex gap-2 mt-2 md:mt-0">
        <div onClick={createBook}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="md:w-8 w-6 md:h-6 h-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div onClick={loginForm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="md:w-8 w-6 md:h-6 h-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        </div>
      </div>
    </div>
  );
}
