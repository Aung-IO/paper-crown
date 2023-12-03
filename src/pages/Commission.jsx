import React from "react";
import BookList from "../components/BookList";

export default function Commission() {
  const collectionName = "commission";
  //need to create route for commission
  return (
    <>
      <div className="text-5xl text-center items-center p-7 md:p-14 font-mono bg-zinc-50">
        <span>Commission</span>
      </div>
 
      <div>
        {/* Book List */}
        <div>
          <BookList collectionName={collectionName} />
        </div>
      </div>
    </>
  );
}
