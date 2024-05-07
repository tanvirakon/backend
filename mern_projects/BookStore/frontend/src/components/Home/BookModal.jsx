/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenText } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

function BookModal({ book, onClose }) {
  return (
    <div
      className="fixed bg-black bg-opacity-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full bg-white rounded-xl p-4 flex  flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose className="absolute right-6 text-red-400 cursor-pointer" onClick={onClose} />
        <h3 className="  text-white mb-2 ">
          <span className="bg-sky-400 rounded px-1 px-1">{book.publishYear}</span>
        </h3>
        <h4 className="text-gray-400 text-xs mb-2">{book._id}</h4>
        <div className="flex justify-start place-items-center gap-x-2 my-2">
          <PiBookOpenText className="text-sky-400" />
          <h2 className="">{book.title}</h2>
        </div>
        <div className="flex justify-start place-items-center gap-x-2 my-2">
          <BiUserCircle className="text-sky-400" />
          <h2 className="">{book.author}</h2>
        </div>
        <p>Lorem ipsum ducimus, deleniti quaerat exmos iste ab.</p>
        <p className="mt-4">
          Eu dolor pariatur dolor sit veniam sint eu in minim excepteur
          excepteur dolore ut in. Est ipsum in consectetur veniam labore eiusmod
          voluptate duis incididunt. Eu do est comident consectetur.
        </p>
      </div>
    </div>
  );
}

export default BookModal;
