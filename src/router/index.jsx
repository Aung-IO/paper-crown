import { createBrowserRouter } from "react-router-dom";
import BookForm from "../components/BookForm";
import BookDetail from "../pages/BookDetail";
import Books from "../pages/Books";
import Commission from "../pages/Commission";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import FAQs from "../pages/FAQs";
import Home from "../pages/Home";
import OriginalArts from "../pages/OriginalArts";
import Register from "../pages/Register";
import Login from "../pages/Login";
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
        element: <BookForm/>,
      },
      {
        path: "/edit/:id",
        element: <BookForm/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
     
     
     
      
    ],
  },
]);

export default router;
