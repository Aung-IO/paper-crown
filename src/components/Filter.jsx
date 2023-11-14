import React from "react";
import useFetch from "../hooks/useFetch";

function Filter() {

  let filter = 'nova'

  let { data: books, loading, error } = useFetch(`http://localhost:3000/books?q=${filter}`);
  

 

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {loading && <p>Loading...</p>}
      <p className="text-sm text-gray-400 font-mono border-b-2 p-1">FILTERS</p>
      {!!books && (
        <div>
          {[...new Set(books.map((book) => book.author))].map((a, index) => (
            <div className="mt-1" key={index}>
              <input type="checkbox"  /> {a}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
