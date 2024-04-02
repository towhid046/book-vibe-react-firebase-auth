import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getItemFromLS } from "../../utility/localStorage";
import ListedBook from "./../../components/ListedBook/ListedBook";
import { sortArr } from "../../utility/sortArr";
import "react-tabs/style/react-tabs.css";
import NoBookAdded from "../../components/NoBookAdded/NoBookAdded";
import { BookContext } from "../../providers/ContextProvider";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishListedBooks, setwishListedBooks] = useState([]);

  const [sortValue, setSortValue] = useState("");

  const {books} = useContext(BookContext);

  useEffect(() => {
    const readBooksIds = getItemFromLS("read-books");
    const targetedBooks = books.filter((book) =>
      readBooksIds.includes(book.bookId)
    );
    setReadBooks(targetedBooks);
  }, [books]);

  useEffect(() => {
    const wishListedBooksIds = getItemFromLS("wishlist-books");
    const targetedBooks = books.filter((book) =>
      wishListedBooksIds.includes(book.bookId)
    );
    setwishListedBooks(targetedBooks);
  }, [books]);

  return (
    <div className="container mx-auto px-4 mb-20">
      <header className="bg-[#f3f3f3] py-8 rounded-2xl flex justify-center items-center">
        <h1 className="font-bold text-3xl text-[#131313]">Books</h1>
      </header>

      <div className="text-center mt-8 mb-12">
        <select
          onChange={(e) => setSortValue(e.target.value)}
          className="select join-item select-bordered "
        >
          <option value="sortBy" disabled selected className="text-gray-400">
            Sort By
          </option>
          <option value="rating">Rating</option>
          <option value="totalPages">Number of pages</option>
          <option value="yearOfPublishing">Publisher year</option>
        </select>
      </div>

      <Tabs>
        <TabList className='text-lg font-normal text-[#13131380] mb-8 border-b'>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-5">
            {readBooks.length ? (
              sortArr(readBooks, sortValue).map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))
            ) : (
              <NoBookAdded text={`You haven't read any book yet!`} />
            )}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="space-y-5">
            {wishListedBooks.length ? (
              sortArr(wishListedBooks, sortValue).map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))
            ) : (
              <NoBookAdded text="No book added to wishlist yet!" />
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
