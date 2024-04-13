const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Daily Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          //inline styling
          //outer curlybrace -> tell react we are using a dynamic value
          //inner curlybrace -> js object (key value pair)
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
