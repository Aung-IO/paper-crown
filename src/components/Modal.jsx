import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useFirestore from "../hooks/useFirestore";
import "./index.css";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  let [search, setSearch] = useState("");
  let [books, setBooks] = useState("");

  let { getCollection } = useFirestore();
  let { error, loading, data: allBooks } = getCollection("books");
  let handleSearch = (e) => {
    e.preventDefault();

   if (search) {
    const filteredBooks = allBooks.filter((book) => {
        return (
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
        );
      });
      setBooks(filteredBooks);
      
      
    } else {
        setBooks(allBooks)
    }
  };
 
  return (
    <div className="modal-overlay absolute ">
      <div className="modal ">
        {/* close icon */}
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 mr-4 cursor-pointer"
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {/* search bar */}
        <div>
          <form onSubmit={handleSearch} className="flex justify-center mt-8">
            <input
              type="text"
              placeholder="Search books"
              className="w-96 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </form>
        </div>
        {/* data */}
        <div>
          {loading && <LoadingSpinner />}

          {/* book list */}
          {!!books && (
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 my-3 overflow-auto">
              {books.map((book) => (
                <Link to={`/books/${book.id}`} key={book.id}>
                  <div className="p-4  border border-1">
                    <img src={book.cover} alt="" />
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
              No Result Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
