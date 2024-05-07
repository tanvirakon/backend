import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/book/${id}`).then((Response) => {
      setTitle(Response.data.title);
      setAuthor(Response.data.author);
      setPublishYear(Response.data.publishYear);
    });
  },[]);
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/book/${id}`, data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(true);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1>Edit book</h1>
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
        <button onClick={handleEditBook}>Update</button>
      </div>
    </div>
  );
}
export default EditBook;
