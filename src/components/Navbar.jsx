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

  return (
    <nav>
      <ul className="container mx-auto flex flex-wrap items-center justify-between mt-4">
        {/* logo */}
        <li className="flex">
          <p className="text-lg">Paper Crown</p>
          <img src="../src/assets/web-logo.png" className="w-10 -mt-4 -ml-6" />
        </li>
        {/* menu */}
        <li>
          <ul className="flex gap-12">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/commission">Commission</Link>
            </li>
            <li>
              <Link to="/origianl_arts">Original Arts</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </li>
        {/* icons */}
        <li>
          <ul className="flex gap-6">
            <li>
              <button onClick={loginForm}>
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              </button>
            </li>
            <li>
              <button onClick={createBook}>
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
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </li>

            <li className="flex items-center gap-2">
              <input
                type="text"
                placeholder="search books..."
                className="outline-none"
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
        </li>
      </ul>
    </nav>
  );
}
