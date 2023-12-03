import React from "react";
import BookList from "../components/BookList";

function OriginalArts() {
  const collectionName = "og";
  //need to create route for original_arts
  return (
    <>
      <div className="text-5xl text-center items-center p-7 md:p-14 font-mono bg-zinc-50">
        <span>Original Arts</span>
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

export default OriginalArts;
