import { createBrowserRouter } from "react-router-dom";
import CreateBook from "../components/CreateBook";
import BookDetail from "../pages/BookDetail";
import Books from "../pages/Books";
import Commission from "../pages/Commission";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import FAQs from "../pages/FAQs";
import Home from "../pages/Home";
import OriginalArts from "../pages/OriginalArts";
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
        path: "/origianl_arts",
        element: <OriginalArts />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
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
