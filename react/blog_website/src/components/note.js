import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = ({ list, del }) => {
  return list.map((note, index) => (
    <div className="note" key={index}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button
        onClick={() => {
          del(index);
        }}
      >
        <DeleteForeverIcon/>
      </button>
    </div>
  ));
};

export default Note;
