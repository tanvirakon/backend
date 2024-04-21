import React, { useState } from "react";

function Play() {
  const [show, setShow] = useState("");
  const [list, setList] = useState([]);
  function click(e) {
    const { value } = e.target;
    setShow(value);
  }
  function btnClick(e) {
    setShow("");
    setList((prev) => {
      return [...prev, show];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={click} value={show} />
        <button onClick={btnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ol>
          {list.map((e) => (
            <li>{e}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Play;
