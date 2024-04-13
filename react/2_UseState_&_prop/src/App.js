import Homepage from "./homepage";
import Navbar from "./navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
