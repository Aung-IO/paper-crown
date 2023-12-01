import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "../assets/icons/deleteIcon.svg";
import EditIcon from "../assets/icons/editIcon.svg";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../context/AuthContext";
import useFirestore from "../hooks/useFirestore";

function BookList(props) {
  let { user } = useContext(AuthContext);

  let [books, setBooks] = useState("");
  const [search, setSearch] = useState("");

  let { getCollection, deleteDocument } = useFirestore();
  let { error, loading, data: allBooks } = getCollection(props.collectionName);
  
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
    }
  };

  

  let deleteBook = async (e, id) => {
    e.preventDefault();
    await deleteDocument(props.collectionName, id);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      
      <div className="flex justify-center ml-36">
        <form onSubmit={handleSearch} className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search books"
            className="w-96 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 shadow font-bold py-2 px-4 h-10 mt-4 ml-3 rounded-md whitespace-nowrap "
          onClick={() => setBooks(allBooks)}
        >
          <p className="text-xs">Show all</p>
        </button>
      </div>
      {loading && <LoadingSpinner />}
      {/* book list */}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3 mt-10">
          {books.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <div className="p-4 border border-1">
                <img src={book.cover} alt="" className="max-h-36" />
                <div className="text-center space-y-2 mt-3">
                  <h1>{book.title}</h1>
                  <p>${book.price}</p>
                </div>
                {!!user && (
                  <div className="flex justify-end space-x-2">
                    <Link to={`/edit/${props.collectionName}/${book.id}`}>
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
