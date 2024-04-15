import React from "react";
import Template from "./template";
import Emojipedia from "../emojipedia";
import Title from "./title";

function App() {
  return (
    <div>
      <Title />
      <Template emojiList={Emojipedia} />
    </div>
  );
}

export default App;
