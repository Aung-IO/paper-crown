import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cover from "../assets/book_cover.png";
import DeleteIcon from "../assets/icons/deleteIcon.svg";
import EditIcon from "../assets/icons/editIcon.svg";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../context/AuthContext";
import useFirestore from "../hooks/useFirestore";

function BookList() {
  let { user } = useContext(AuthContext);
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let search = param.get("search");

  let { getCollection, deleteDocument } = useFirestore();
  let { error, loading, data: books } = getCollection("books");

  let deleteBook = async (e, id) => {
    e.preventDefault();
    await deleteDocument("books", id);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {loading && <LoadingSpinner />}

      {/* book list */}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
          {books.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <div className="p-4  border border-1">
                <img src={cover} alt="" />
                <div className="text-center space-y-2 mt-3">
                  <h1>{book.title}</h1>
                  <p>${book.price}</p>
                </div>
                {!!user && (
                  <div className="flex justify-end space-x-2">
                    <Link to={`/edit/${book.id}`}>
                      {" "}
                      <img src={EditIcon} />
                    </Link>
                    <img
                      src={DeleteIcon}
                      onClick={(e) => deleteBook(e, book.id)}
                    />
                  </div>
                )}
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
