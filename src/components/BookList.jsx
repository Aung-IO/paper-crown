import React from "react";
import { Link, useLocation } from "react-router-dom";
import cover from "../assets/book_cover.png";
import useFetch from "../hooks/useFetch";

function BookList(props) {
  let { baseRoute } = props;
  
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let search = param.get("search");
  let filter = param.get("author");

  let {
    data: books,
    loading,
    error,
  } = useFetch(
    `http://localhost:3000/books${search ? `?q=${search}` : ""}${
      filter ? `?q=${filter}` : ""
    }`
  );

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {loading && <p>loading ... </p>}

      {/* book list */}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
          {books.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <div className="p-4">
                <img src={cover} alt="" />
                <div className="text-center space-y-2 mt-3">
                  <h1>{book.title}</h1>
                  <p>${book.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {books && !books.length && (
        <p className="text-center text-xl font-bold">
          Hmmm, we didn't find anything for "{search}"
        </p>
      )}
    </div>
  );
}

export default BookList;
