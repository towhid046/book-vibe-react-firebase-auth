import PropTypes from "prop-types";
import { LuMapPin } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { TbPageBreak } from "react-icons/tb";
import { Link } from "react-router-dom";

const ListedBook = ({ book }) => {
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
    <div className="border rounded-xl flex flex-col md:flex-row items-center gap-6 p-6">
      <div className="py-7 px-12 bg-[#f3f3f3] rounded-xl">
        <img className="w-28" src={image} alt="Book Image" />
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-2xl">{bookName}</h1>
        <p className="text-base font-medium text-[#131313CC]">By: {author}</p>
        <ul className="flex gap-3 flex-wrap">
          <strong className="text-base font-bold">Tags: </strong>
          {tags.map((tag) => (
            <li
              className="btn btn-sm rounded-full text-base text-[#23BE0A]"
              key={tag}
            >
              {tag}
            </li>
          ))}
          <p className="flex items-center gap-3 text-[#131313CC] text-base font-normal">
            <LuMapPin />
            <span>Year of Publishing: {yearOfPublishing}</span>
          </p>
        </ul>
        <div className="flex flex-wrap items-center gap-7 text-[#13131399] text-base font-normal">
          <p className="flex items-center gap-2">
            <GoPeople />
            <span>Publisher: {publisher}</span>
          </p>
          <p className="flex items-center gap-2">
            <TbPageBreak />
            <span>Pages: {totalPages}</span>
          </p>
        </div>
        <hr />
        <div className="flex flex-wrap gap-3">
          <button className="btn rounded-full bg-[#328EFF26] text-[#328EFF] font-normal text-base">Category: {category}</button>
          <button className="btn rounded-full bg-[#FFAC3326] text-[#FFAC33] font-normal text-base">Rating: {rating}</button>
          <Link
            to={`/book/${bookId}`}
            className="btn rounded-full text-lg font-medium text-white bg-[#23BE0A] "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ListedBook.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ListedBook;
