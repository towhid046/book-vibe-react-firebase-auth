import PropTypes from "prop-types";
import { SlBookOpen } from "react-icons/sl";
import { FiDollarSign } from "react-icons/fi";

const Card = ({ book, handelAddToCart }) => {

  const { bookName, image, author, price, totalPages } = book;

  return (
    <div className="card border p-4 justify-between">
      <figure className="bg-[#f3f3f3] rounded-xl h-[230px] py-5">
        <img className="w-28 " src={image} alt="Shoes" />
      </figure>
      <div className="mt-5 flex flex-col justify-between gap-3 w-full">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="flex gap-6">
          <p className="flex items-center gap-2 font-bold">
            <FiDollarSign />
            <span>Price:</span>
            <span>{price}</span>
          </p>
          <p className="flex items-center gap-2 font-bold">
            <SlBookOpen />
            <span>Pages:</span>
            <span>{totalPages}</span>
          </p>
        </div>
        <button onClick={()=>handelAddToCart(book)} className="btn text-white btn-info">Add to Cart</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  book: PropTypes.object.isRequired,
  handelAddToCart: PropTypes.func.isRequired,
};

export default Card;