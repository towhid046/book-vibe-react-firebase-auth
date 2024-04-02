import { useLoaderData } from "react-router-dom";
import { useState} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from "./../../components/Cards/Cards";
import Carts from "./../../components/Carts/Carts";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const handelRemoveFromCart = (id) => {
    toast.info("Book is remove from the cart");
    const reminigItem = cartItems.filter((item) => item.bookId !== id);
    setCartItems(reminigItem);
  };

  const handelAddToCart = (book) => {
    const existedItem = cartItems.find((item) => item.bookId === book.bookId);

    if (!existedItem) {
      setCartItems([...cartItems, book]);
      toast.success("Book is added!");
    } if(existedItem){
        toast.error('Book already added!')
    }
  };

  const books = useLoaderData();

  return (
    <div className="container mx-auto px-4 gap-6 flex md:flex-row flex-col justify-between py-7">
      <Cards handelAddToCart={handelAddToCart} books={books} />

      <Carts
        cartItems={cartItems}
        handelRemoveFromCart={handelRemoveFromCart}
      />
    </div>
  );
};

export default Shop;
