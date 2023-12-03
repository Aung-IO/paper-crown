import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useFirestore from "../hooks/useFirestore";
export default function BookDetail() {
  let { id } = useParams();
  let { path } = useParams();
  let { getDocument } = useFirestore();
  let { error, loading, data: book } = getDocument(path, id);
  const navigate = useNavigate();
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <LoadingSpinner />}

      {book && (
        <div className="grid grid-cols-2 mt-20">
          <div>
            <img src={book.cover} alt="cover" className="w-[80%]" />
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-3xl">{book.title}</h1>
            <h3>Price : ${book.price}</h3>

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

            <button
              onClick={() => navigate(-1)}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-3 py-1 px-2 border border-blue-500 hover:border-transparent rounded"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
