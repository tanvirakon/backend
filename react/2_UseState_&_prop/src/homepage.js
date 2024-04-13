import { useState } from "react";
import BlogList from "./blogList";

const Homepage = () => {
  // usestate r datatype jekono kichu hte pare. including object boolien
  // const [name, setName] = useState("initial name");
  // const [num, setNum] = useState(10);
  // const handleClick = () => {
  //   setName("value after button trigger");
  //   setNum(23);
  // };
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {/* <h2>Homepage</h2>
      <p>
        {name} is {num}
      </p>
      <button onClick={handleClick}>click</button> */}

      <BlogList blogs={blogs} title="All Blogs" />
      {/* this component now reuseable */}
      <BlogList
        blogs={blogs.filter(function (blog) {
          return blog.author === "mario";
        })}
        title="Mario's Blogs"
      />
    </div>
  );
};

export default Homepage;
