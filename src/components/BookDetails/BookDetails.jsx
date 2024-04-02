import { useLoaderData, useParams } from "react-router-dom";
import {getItemFromLS, saveItemToLS} from './../../utility/localStorage'
import { toast } from 'react-toastify';

const BookDetails = () => {
  const books = useLoaderData();
  const obj = useParams();
  const targetedBook = books.find(
    (book) => book.bookId === parseInt(obj.bookId)
  );

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
  } = targetedBook;

const handelReadBooks = (id) => {
  saveItemToLS('read-books', id)
}

const handelWishListBooks = (id) => {
  const readBooksIds = getItemFromLS('read-books');
  if(!readBooksIds.includes(id)){
    saveItemToLS('wishlist-books', id)
  } else{
    toast.info('You have already read this book')
  }
}
 


  return (
    <div className="container px-4 mx-auto flex flex-col lg:flex-row justify-between gap-12 mb-24">
      <div className="bg-[#f3f3f3] rounded-2xl  py-12 lg:px-24 flex justify-center items-center">
        <img className="max-w-xs" src={image} alt="Book Image" />
      </div>
      <div className="">
        <h2 className="text-[40px] text-[#131313] font-bold">{bookName}</h2>
        <p className="font-medium text-xl mt-5 mb-4">By: {author}</p>
        <hr />
        <p className="font-medium text-xl my-4">{category}</p>
        <hr className=" border" />
        <p className="mt-6">
          <strong className="text-base font-bold">Review: </strong> <span className="text-base font-normal">{review}</span>
        </p>
        <ul className="flex gap-3 flex-wrap mt-10 mb-5">
          <strong className="font-bold text-base">Tags: </strong>
          {tags.map((tag) => (
            <li
              className="btn btn-sm rounded-full text-base text-[#23BE0A]"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
        <hr className="border" />

        <div className="mt-6 mb-8">
          <table className="">
            <tbody className="flex flex-col">
              <tr>
                <td className="w-52">Namber of Pages:</td>
                <th>{totalPages}</th>
              </tr>

              <tr>
                <td className="w-52">Publisher:</td>
                <th>{publisher}</th>
              </tr>

              <tr>
                <td className="w-52">Year of Publishing:</td>
                <th>{yearOfPublishing}</th>
              </tr>

              <tr>
                <td className="w-52">Rating:</td>
                <th>{rating}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center gap-5">
          <button onClick={()=>handelReadBooks(bookId)} className="btn btn-outline text-lg">Read</button>
          <button onClick={()=> handelWishListBooks(bookId)} className="btn text-white bg-[#59C6D2] lg:text-lg">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
