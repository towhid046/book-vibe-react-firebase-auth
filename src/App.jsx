import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home/Home";
import ListedBooks from "./pages/ListedBooks/ListedBooks";
import BookDetails from "./components/BookDetails/BookDetails";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PagesToRead from "./pages/PagesToRead/PagesToRead";
import NotFound from "./pages/NotFound/NotFound";
import WriteAReview from "./pages/WriteAReview/WriteAReview";
import Shop from "./pages/Shop/Shop";
import ContextProvider from "./providers/ContextProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/listed-books",
          element: <ListedBooks />,
        },
        {
          path: "/book/:bookId",
          element: <BookDetails />,
        },
        {
          path: "/pages-to-read",
          element: <PagesToRead />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/write-a-review",
          element: <WriteAReview />,
        },
      ],
    },
  ]);

  return (
    <div>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
