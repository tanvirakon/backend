import Homepage from "./homepage";
import Navbar from "./navbar";

function App() {
  // const title = "welcome to React ";
  // const like = 50;
  // const link = "www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Homepage />
        {/* <h3>{title}</h3>
          <p>Likes {like} times!</p>
          <p>{"hello world mini"}</p>
          <p>[1,2,3,4]</p>
          <p>{[1, 2, 3, 4]}</p>
          <a href="www.google.com">google</a>
          <p>{Math.random() * 10}</p>
          <a href={link}>google</a> */}
      </div>
    </div>
  );
}

export default App;
