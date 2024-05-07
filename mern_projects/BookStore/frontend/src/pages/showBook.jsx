import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/spinner";

function ShowBook() {
  const [book, setBooks] = useState({});
  const [loading, setloadings] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setloadings(true);
    axios
      .get(`http://localhost:3000/book/${id}`)
      .then((Response) => {
        console.log(Response.data);
        setBooks(Response.data);
        setloadings(false);
      })
      .catch((err) => {
        console.log(err.message);
        setloadings(true);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="">Book details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="border border-slate-200 rounded p-2">
          <div className="my-2">
            <span className="text-slate-400">id</span>
            <span className="mx-4">{book._id}</span>
          </div>
          <div className="my-2">
            <span className="text-slate-400">title</span>
            <span className="mx-4">{book.title}</span>
          </div>
          <div className="my-2">
            <span className="text-slate-400">author</span>
            <span className="mx-4">{book.author}</span>
          </div>
          <div className="my-2">
            <span className="text-slate-400">publishYear</span>
            <span className="mx-4">{book.publishYear}</span>
          </div>
          <div className="my-2">
            <span className="text-slate-400">Created time</span>
            <span className="mx-4">{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className="my-2">
            <span className="text-slate-400">Last updated time</span>
            <span className="mx-4">{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;
