import React, { useEffect, useState } from "react";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/book/${id}`)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        enqueueSnackbar("error happended", { variant: "error" });
        setLoading(true);
      });
  }, []);
  return <div>{loading && <Spinner />}</div>;
}
export default DeleteBook;
