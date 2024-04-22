import React, { useState } from "react";

function TodoItem({ item, id, dlt }) {
  const [strike, setStrike] = useState(false);
  function clicked() {
    dlt(id);
  }
  // return <li onClick={clicked}>{item}</li>;
  // or
  return (
    <li
      onClick={() => {
        dlt(id); //we set it like this, so that dlt funcs only be called when actually the li is being clicked. if we call dlt(id) , it will invoke dlt immedietly , before we even click the li element
      }}
    >
      {item}
    </li>
  );
}

export default TodoItem;
