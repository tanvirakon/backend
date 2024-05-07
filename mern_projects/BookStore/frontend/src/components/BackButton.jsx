import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
  return (
    <div className="mb-2">
      <Link to={"/"}>
        <FaArrowLeft />
      </Link>
    </div>
  );
}

export default BackButton;
