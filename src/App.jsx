import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home/Home";
import ListedBooks from "./pages/ListedBooks/ListedBooks";
import BookDetails from "./components/BookDetails/BookDetails";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PagesToRead from "./pages/PagesToRead/PagesToRead";
import NotFound from "./pages/NotFound/NotFound";
import WriteAReview from './pages/WriteAReview/WriteAReview';
import Shop from './pages/Shop/Shop';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          loader: () => fetch("/books.json"),
          element: <Home />,
        },
        {
          path: "/listed-books",
          loader: () => fetch("/books.json"),
          element: <ListedBooks />,
        },
        {
          path: "/book/:bookId",
          loader: () => fetch(`/books.json`),
          element: <BookDetails />,
        },
        {
          path: "/pages-to-read",
          loader: () => fetch("/books.json"),
          element: <PagesToRead />,
        },
        {
          path: "/shop",
          loader: () => fetch("/books.json"),
          element: <Shop />,
        },
        {
          path: '/write-a-review',
          element: <WriteAReview/>
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
