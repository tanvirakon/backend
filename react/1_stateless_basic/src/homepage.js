const Homepage = () => {
  const handleClick = function (e) {
    // e is event parameter
    console.log("hello america, here i come", e);
  };
  // parameter ase erkm function eo event parameter dea jay
  const handleClickAgain = function (name) {
    console.log(`my name is ${name}`);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      {/* function e () dile seta auto invoke hye jy, before even i call it*/}
      <button onClick={handleClick}>click</button>
      {/* if we want to pass an argument... */}
      {/* arrow / annonymous func.  invokes when we call it*/}
      <button onClick={() => handleClickAgain("akon")}>click again</button>
    </div>
  );
};

export default Homepage;
