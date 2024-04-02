import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/books.json");
      const data = await res.json();
      setBooks(data);
    };
    loadData();
  }, []);

  const info = { books };
  return <BookContext.Provider value={info}>{children}</BookContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
