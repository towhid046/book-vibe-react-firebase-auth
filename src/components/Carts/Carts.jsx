import Cart from "../Cart/Cart";
import PropTypes from "prop-types";

const Carts = ({ cartItems, handelRemoveFromCart }) => {

  return (
    <div
      className="md:min-w-[310px] bg-white  rounded-xl p-5 "
      style={{ height: "max-content" }}
    >
      <h2 className="text-xl text-center text-blue-500 font-bold border-b-2 pb-5">
        Total Books: {cartItems.length}
      </h2>

      <table className="table">
        <thead className="font-bold text-base">
          <tr>
            <th>SN.</th>
            <th>Book Name</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((book, index) => (
            <Cart
              key={book.bookId}
              book={book}
              index={index}
              handelRemoveFromCart={handelRemoveFromCart}
            />
          ))}
        </tbody>
      </table>

      <h3 className="text-base font-bold text-gray-500 border-t-2 py-4">
        Total Price: {cartItems.reduce((acc, curr) => acc + curr.price, 0)}
      </h3>
    </div>
  );
};

Carts.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handelRemoveFromCart: PropTypes.func.isRequired,
};

export default Carts;
