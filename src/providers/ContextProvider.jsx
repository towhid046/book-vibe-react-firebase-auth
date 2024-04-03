import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const BookContext = createContext(null);
export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/books.json");
      const data = await res.json();
      setBooks(data);
    };
    loadData();
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const booksInfo = { books };
  const authInfo = {createUser, user, setUser };
  return (
    <>
      <AuthContext.Provider value={authInfo}>
        <BookContext.Provider value={booksInfo}>{children}</BookContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
