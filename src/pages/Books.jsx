import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cover from "../assets/book_cover.png";
import useFetch from "../hooks/useFetch";
import Filter from "../components/Filter";
import BookList from "../components/BookList";

export default function Books() {
  
  return (
    <>
      <div className="text-5xl text-center items-center p-14 font-mono bg-zinc-50">
        <span>Books</span>
      </div>

      <div>
        <ul className="flex m-8">
          {/* Filter */}
          <li className="w-1/5 p-5">
            <Filter/>
          </li>
          {/* Book List */}
          <li className="w-4/5">
            <BookList/>
          </li>
        </ul>
      </div>
    </>
  );
}
