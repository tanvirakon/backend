import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  function submitted(data) {
    setList((prev) => {
      return [...prev, data];
    });
  }
  function del(id) {
    setList((prev) => {
      return list.filter((e, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea submitted={submitted} />
      <Note list={list} del={del} />
      <Footer />
    </div>
  );
}

export default App;
