import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";

function Filter() {
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let search = param.get("search");
  let filter = param.get("author");
  let navigate = useNavigate();
  let [filtered, setFiltered] = useState("");

  const handleFilter = () => {
    navigate(`/books${filtered ? (filtered === 'all' ? '' : `?author=${filtered}`) : ''}`);
  };
  useEffect(() => {
    handleFilter();
  }, [filtered]);

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
    {loading && <p>Loading...</p>}
    <p className="text-sm text-gray-400 font-mono border-b-2 p-1">
      FILTERS
    </p>

    <ul>
      <li>
        <button onClick={() => setFiltered("all")}>All</button>
      </li>
      <li>
        <button onClick={() => setFiltered("nova")}>Nova</button>
      </li>
      <li>
        <button onClick={() => setFiltered("soka")}>Soka</button>
      </li>
      <li>
        <button onClick={() => setFiltered("warpu")}>WarPu</button>
      </li>
      
    </ul>
  </div>
  );
}

export default Filter;
