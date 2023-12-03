import React from "react";
import BookList from "../components/BookList";

export default function Books() {
  const collectionName = "books";
  return (
    <>
      <div className="text-5xl text-center items-center p-14 font-mono bg-zinc-50">
        <span>Books</span>
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
