/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import BookSingleCard from "./BookSingleCard";

function BookCard({ books }) {
  return (
    <div className="grid grid-cols-4">
      {books.map((book, index) => {
        return <BookSingleCard book={book}  />;
      })}
    </div>
  );
}

export default BookCard;
