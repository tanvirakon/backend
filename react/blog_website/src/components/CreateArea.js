import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { ZoomIn } from "@mui/icons-material";

function CreateArea({ submitted }) {
  const [show, setShow] = useState(false);

  const [newblog, setNewBlog] = useState({
    title: "",
    content: "",
  });

  function newEntry(e) {
    const { value, name } = e.target;
    setNewBlog((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function textClicled() {
    setShow(true);
  }

  function clicked(event) {
    event.preventDefault();
    submitted(newblog);
    setNewBlog({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className="create-note">
        {show && (
          <input
            name="title"
            placeholder="Title"
            value={newblog.title}
            onChange={newEntry}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={show ? "3" : "1"}
          value={newblog.content}
          onChange={newEntry}
          onClick={textClicled}
        />
        <Zoom in={show}>
          <Fab onClick={clicked}>
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
