import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

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

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const logInWithGoogle =() => {
    return signInWithPopup(auth, googleProvider)
  }

  const logInWithGithub =() => {
    return signInWithPopup(auth, googleProvider)
  }

  const booksInfo = { books };
  const authInfo = {
    createUser,
    user,
    setUser,
    logInUser,
    resetUserPassword,
    logOut,
    logInWithGoogle
  };
  
  return (
    <>
      <AuthContext.Provider value={authInfo}>
        <BookContext.Provider value={booksInfo}>
          {children}
        </BookContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
