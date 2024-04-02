import PropTypes from "prop-types";
import Card from './../Card/Card';

const Cards= ({ handelAddToCart, books }) => {


  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {books.map((book) => (
        <Card
          key={book.bookId}
          book={book}
          handelAddToCart={handelAddToCart}
        />
      ))}
    </div>
  );
};

Cards.propTypes = {
  handelAddToCart: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};

export default Cards;