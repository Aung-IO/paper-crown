import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact";
import CreateBook from "../components/CreateBook";
import BookDetail from "../pages/BookDetail";
import Books from "../pages/Books";
import Commission from "../pages/Commission";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Layout from "../pages/layouts/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookDetail/>,
      },
      {
        path: "/commission",
        element: <Commission />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/create",
        element: <CreateBook/>,
      },
      
    ],
  },
]);

export default router;
