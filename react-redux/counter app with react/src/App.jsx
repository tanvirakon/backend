/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        minus
      </button>
    </div>
  );
}

export default App;
