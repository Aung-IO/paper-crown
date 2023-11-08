import React from "react";
import BookList from "../components/BookList";
import Filter from "../components/Filter";

export default function Books() {
  return (
    <>
      <div className="text-5xl text-center items-center p-14 font-mono bg-zinc-50">
        <span>Books</span>
      </div>

      <div>
        <ul className="flex m-8">
          <li className="w-1/5 p-5">
            <Filter />
          </li>
          <li className="w-4/5">
            <BookList />
          </li>
        </ul>
      </div>
    </>
  );
}
