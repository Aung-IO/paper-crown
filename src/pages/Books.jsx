import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cover from "../assets/book_cover.png";
import useFetch from "../hooks/useFetch";

export default function Books() {
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let search = param.get("search");
  let filter = param.get("author");
  let navigate = useNavigate();
  let [filtered, setFiltered] = useState("");

  let handleClick = (value) => {
    setFiltered(value);
  };
  useEffect(() => {
    handleFilter();
  }, [filtered]);

  let handleFilter = () => {
    if (filtered === "all") {
      navigate("");
    } else {
      navigate("/books/?author=" + filtered);
    }
  };

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
    <>
      <div className="text-5xl text-center items-center p-14 font-mono bg-zinc-50">
        <span>Books</span>
      </div>

      <div>
        <ul className="flex m-8">
          {/* Filter */}
          <li className="w-1/5 p-5">
            <div>
              {loading && <p>Loading...</p>}
              <p className="text-sm text-gray-400 font-mono border-b-2 p-1">
                FILTERS
              </p>

              <ul>
              <li>
                  <button onClick={() => handleClick("all")}>All</button>
                </li>
                <li>
                  <button onClick={() => handleClick("nova")}>Nova</button>
                </li>
                <li>
                  <button onClick={() => handleClick("soka")}>Soka</button>
                </li>
                <li>
                  <button onClick={() => handleClick("warpu")}>WarPu</button>
                </li>
              </ul>

              {/* {!!books && (
                <div>
                  {[...new Set(books.map((book) => book.author))].map(
                    (a, index) => (
                      <div className="mt-1 flex" key={index}>
                       
                        <button onClick={handleFilter}>Nova</button>
                      </div>
                    )
                  )}
                </div>
              )} */}
            </div>
          </li>
          {/* Book List */}
          <li className="w-4/5">
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
          </li>
        </ul>
      </div>
    </>
  );
}
