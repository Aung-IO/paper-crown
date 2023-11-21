import React from "react";
import BookList from "../components/BookList";

export default function Commission() {
  const path = "commission";
  //need to create route for commission
  return (
    <>
      <div className="text-5xl text-center items-center p-14 font-mono bg-zinc-50">
        <span>Commission</span>
      </div>

      <div>
        <ul className="flex m-8">
          {/* Filter */}
          {/* <li className="w-1/5 p-5">
            
            <Filter baseRoute={baseRoute} />
          </li> */}
          {/* Book List */}
          <li className="w-4/5">
            <BookList path={path} />
          </li>
        </ul>
      </div>
    </>
  );
}
