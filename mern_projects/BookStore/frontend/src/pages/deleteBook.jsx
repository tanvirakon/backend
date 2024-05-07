import React, { useEffect, useState } from "react";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/book/${id}`)
      .then((res) => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(true);
      });
  }, []);
  return <div>{loading && <Spinner />}</div>;
}
export default DeleteBook;
