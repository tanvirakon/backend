import React, { useState } from "react";
import TodoItem from "./todoitem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function dlt(id) {
    const newArray = items.filter(function (element, index) {
      return index != id;
    });
    setItems(newArray);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem item={item} key={index} id={index} dlt={dlt} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
