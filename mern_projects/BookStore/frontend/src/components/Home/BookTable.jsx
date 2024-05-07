/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function BookTable({ books }) {
  return (
    <div>
      <table className="w-full border-separate border-spacing-1">
        <thead>
          <tr>
            <th className="border border-slate-400 rounded">No</th>
            <th className="border border-slate-400 rounded">Title</th>
            <th className="border border-slate-400 rounded">Author</th>
            <th className="border border-slate-400 rounded">Publish year</th>
            <th className="border border-slate-400 rounded">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={book._id}>
                <td className="border border-slate-400 rounded text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-400 rounded text-center">
                  {book.title}
                </td>
                <td className="border border-slate-400 rounded text-center ">
                  {book.author}
                </td>
                <td className="border border-slate-400 rounded text-center ">
                  {book.publishYear}
                </td>
                <td className="border border-slate-400 rounded text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-green-400" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-yellow-400" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-red-400" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
