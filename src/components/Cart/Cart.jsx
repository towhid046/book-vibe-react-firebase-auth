import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const Cart = ({ book, index, handelRemoveFromCart }) => {
  const { bookName,bookId } = book; // book
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{bookName}</td>
      <td
        onClick={() => handelRemoveFromCart(bookId)}
        className="mt-2 text-red-500 text-2xl cursor-pointer"
      >
        <MdDeleteForever />
      </td>
    </tr>
  );
};

Cart.propTypes = {
  book: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handelRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;