import React from "react";
import BookList from "../components/BookList";

export default function Books() {
  return (
    <>
      <div className="h-40 w-full bg-zinc-50">
        <div className="text-5xl text-center items-center p-14 font-mono">
          <span>Books</span>
        </div>

        <div>
          <ul className="flex m-4">
            <li className="w-1/5 p-3 border border-red-600">
              {/* Filters by authors */}
             <p className="text-sm text-gray-400 font-mono border-b-2 p-1">FILTERS</p>
             <div>
                <p>Kim Jung Gi</p>
                <p>Dong Ho Kim</p>
                <p>Hoooook</p>
                <p>Peter Han</p>
             </div>
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
