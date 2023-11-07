import React from "react";
import BookList from "../components/BookList";

export default function Books() {
  return (
    <>
      <div className="h-40 w-full bg-zinc-50">
        <div className="text-5xl text-center items-center p-14 font-serif">
          <span>Books</span>
        </div>

        <div>
          <ul className="list-none p-0 m-0 flex">
            <li className="w-1/5 p-3 border border-red-600">
              {/* Filters by authors */}
              <h1>Nova</h1>
              <h1>Soka</h1>
              <h1>AK</h1>
              <h1>Siae Saing</h1>
              <h1>War Pu</h1>
              <h1>Yoking</h1>
            </li>
            <li className="w-4/5">
              <BookList />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
