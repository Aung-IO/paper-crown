import React from "react";
import { Link, useParams } from "react-router-dom";
import cover from "../assets/book_cover.png";
import LoadingSpinner from "../components/LoadingSpinner";
import useFetch from "../hooks/useFetch";
export default function BookDetail() {
  // dynamic id
  let { id } = useParams();
  // fetch book

  let {
    data: book,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books/${id}`);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <LoadingSpinner />}

      {book && (
        <div className="grid grid-cols-2 mt-20">
          <div>
            <img src={cover} alt="cover" className="w-[80%]" />
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-3xl">{book.title}</h1>
            <h3>{book.price}</h3>

            <p className="font-bold text-2xl">{book.author}</p>
            <p>{book.description}</p>
            <p>
              <b>Dimension: </b>
              {book.dimension}
            </p>
            <p>
              <b>Pages: </b>
              {book.pages}
            </p>
            <Link to="/books">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-3 py-1 px-2 border border-blue-500 hover:border-transparent rounded">
              Back
            </button>
          </Link>
          </div>

          
        </div>
      )}
    </>
  );
}
