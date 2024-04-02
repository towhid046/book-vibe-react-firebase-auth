import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import dotedLine from "./../../assets/images/doted-line.svg";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <Link title="Click to show details" to={`/book/${bookId}`} className="card border p-5 justify-between cursor-pointer">
      <figure className="p-5 bg-[#f3f3f3] h-[230px] rounded-xl mb-6">
        <img src={image} alt="Book Image" className="w-24" />
      </figure>
      <div className="space-y-4 ">
        <ul className="flex gap-3 flex-wrap">
          {tags.map((tag) => (
            <li
              className="btn btn-sm rounded-full text-base text-[#23BE0A]"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold text-[#131313]">{bookName}</h2>
        <p className="text-base font-medium text-[#131313CC]">By: {author}</p>
        <img src={dotedLine} alt="Doted Line" className="w-full" />

        <div className="flex justify-between text-[#131313CC] items-center text-base font-medium ">
          <p>{category}</p>
          <p className="flex items-center gap-2">
            <span>{rating}</span> <CiStar className="text-lg" />{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
