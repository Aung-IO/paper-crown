import React from "react";
import useFetch from "../hooks/useFetch";

function Filter() {
  let { data: books, loading, error } = useFetch("http://localhost:3000/books");

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {loading && <p>Loading...</p>}
      <p className="text-sm text-gray-400 font-mono border-b-2 p-1">FILTERS</p>
      {!!books && (
        <div>
          {books.map((book) => (
            <div className="mt-1" key={book.id}>
              <input type="checkbox" /> {book.categories}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
