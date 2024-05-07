import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function CreateBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/book", data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        enqueueSnackbar("error happended", { variant: "error" });
        setLoading(true);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1>create book</h1>
      {loading ? <Spinner /> : null}
      <div className="flex flex-col border rounded-sm border-slate-400 w-[400px] p-4">
        <div className="my-2">
          <label className="mr-4">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-200 px-2"
          />
        </div>
        <div className="my-2">
          <label className="mr-4">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-gray-200 px-2"
          />
        </div>
        <div className="my-2">
          <label className="mr-4">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border border-gray-200 px-2"
          />
        </div>
        <button onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  );
}
export default CreateBook;
