/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { PiBookOpenText } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";

function BookSingleCard({ book }) {
  const [show, setShow] = useState(false);
  return (
    <div
      key={book._id}
      className="border border-gray-300 rounded-lg p-2 m-4 bg-white hover:shadow-md relative"
    >
      <h3 className="bg-sky-400 rounded absolute top-0.5 right-0.5 px-1 text-white">
        {book.publishYear}
      </h3>
      <h4 className="text-gray-400 text-xs my-4">{book._id}</h4>
      <div className="flex justify-start place-items-center gap-x-2 my-2">
        <PiBookOpenText className="text-sky-400" />
        <h2 className="">{book.title}</h2>
      </div>
      <div className="flex justify-start place-items-center gap-x-2 my-2">
        <BiUserCircle className="text-sky-400" />
        <h2 className="">{book.author}</h2>
      </div>
      <div className="flex justify-evenly gap-x-4">
        <BiShow className="text-blue-500 hover:text-black cursor-pointer"
          onClick={() => {
            setShow(true);
          }}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-green-400 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-yellow-400 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-red-400 hover:text-black" />
        </Link>
      </div>
      {show && <BookModal book={book} onClose={() => setShow(false)} />}
    </div>
  );
}

export default BookSingleCard;
