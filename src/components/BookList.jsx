import React from "react";
import { Link } from "react-router-dom";
import cover from "../assets/book_cover.png";
import useFetch from "../hooks/useFetch";

function BookList() {
  let { data: books, loading, error } = useFetch("http://localhost:3000/books");

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {loading && <p>loading ... </p>}
    
      {/* book list */}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3" >
          {books.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
             <div className="p-4">
              <img src={cover} alt="" />
              <div className="text-center space-y-2 mt-3">
                <h1>{book.title}</h1>
                <p>{book.price}</p>
              </div>
            </div>
            </Link>
           
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
