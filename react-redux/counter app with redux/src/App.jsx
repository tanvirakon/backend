/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>using redux</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        plus
      </button>
      {/* action call krbo ekhan theke, increment/decrement */}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        minus
      </button>
      {/* action call krbo ekhan theke, increment/decrement */}
    </div>
  );
}

export default App;
