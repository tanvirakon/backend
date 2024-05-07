import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateBook from "./pages/createBook";
import ShowBook from "./pages/showBook";
import DeleteBook from "./pages/deleteBook";
import Editbook from "./pages/editbook";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/books/create" element={<CreateBook />}></Route>
      <Route exact path="/books/details/:id" element={<ShowBook />}></Route>
      <Route exact path="/books/edit/:id" element={<Editbook />}></Route>
      <Route exact path="/books/delete/:id" element={<DeleteBook />}></Route>
    </Routes>
  );
};

export default App;
