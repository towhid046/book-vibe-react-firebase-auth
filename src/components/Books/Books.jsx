import Book from "./../Book/Book";
import { useContext } from "react";
import { BookContext } from './../../providers/ContextProvider';

const Books = () => {
  const {books} = useContext(BookContext);
  return (
    <div className="container mx-auto px-4 mb-16">
      <h1 className="text-center text-[40px] font-bold md:mb-10 mb-5">
        Books
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
