import BookSingleCard from "./BookSingleCard";

function BookCard({ books }) {
  return (
    <div className="grid grid-cols-4">
      {books.map((book) => {
        return <BookSingleCard book={book} />;
      })}
    </div>
  );
}

export default BookCard;
