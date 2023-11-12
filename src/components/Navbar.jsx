import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const createBook = () => {
    let path = "/create";
    navigate(path);
  };

  let [search, setSearch] = useState("");

  let handleSearch = () => {
    navigate("/books/?search=" + search);
    setSearch('');
  };

  return (
    <nav>
      <ul className="flex justify-around mt-4 ">
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
