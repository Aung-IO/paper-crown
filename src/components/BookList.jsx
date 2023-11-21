import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cover from "../assets/book_cover.png";
import LoadingSpinner from "../components/LoadingSpinner";
import { db } from "../firebase";

function BookList() {
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let search = param.get("search");

  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [books, setBooks] = useState([]);
  useEffect(function () {
    setLoading(true);
    let ref = collection(db, "books");
    let q = query(ref, orderBy("date", "desc"));
    
    getDocs(q).then((docs) => {
      if (docs.empty) {
        setError("No Documents Found");
        setLoading(false);
      } else {
        let books = [];
        docs.forEach((doc) => {
          let book = { id: doc.id, ...doc.data() };
          books.push(book);
        });
        setBooks(books);
        setLoading(false);
        setError("");
      }
    });
  }, []);

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
