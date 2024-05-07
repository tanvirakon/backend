import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function BookModal({ book, onClose }) {
  return (
    <div
      className="bg-black bg-opacity-25 top-0 left-0 bottom-0 right-0"
      onClick={onClose}
    >
      <div onClick={(event) => event.stopPropagation()} className="bg-white">
        <AiOutlineClose onClick={onClose} />
        
      </div>
    </div>
  );
}

export default BookModal;
