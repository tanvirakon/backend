import React, { useState, useEffect } from "react";
import Spinner from "../components/spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BookTable from "../components/Home/BookTable";
import BookCard from "../components/Home/BookCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/book")
      .then((Response) => {
        setBooks(Response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err.message);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Books list</h1>
        <Link to={"/books/create"}>
          <MdOutlineAddBox className="text-sky-400 text-xl" />
        </Link>
      </div>

      <div className="flex justify-center gap-x-4">
        <button
          className={
            type == "table" &&
            "border rounded bg-sky-400 text-white px-2 hover:bg-sky-500"
          }
          onClick={() => {
            setType("table");
          }}
        >
          table
        </button>
        <button
          className={
            type == "card" &&
            "border rounded bg-sky-400 text-white px-2 hover:bg-sky-500"
          }
          onClick={() => {
            setType("card");
          }}
        >
          card
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : type == "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
}

export default Home;
