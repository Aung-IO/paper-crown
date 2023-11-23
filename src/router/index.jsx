import React, { useContext } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import BookForm from "../components/BookForm";
import { AuthContext } from "../context/AuthContext";
import BookDetail from "../pages/BookDetail";
import Books from "../pages/Books";
import Commission from "../pages/Commission";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import FAQs from "../pages/FAQs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OriginalArts from "../pages/OriginalArts";
import Layout from "../pages/layouts/Layout";

export default function index() {
  let { authReady, user } = useContext(AuthContext);

  const isAuthenticated = !!user;


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element:<Home/>,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/books/:id",
          element: <BookDetail />,
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
          element: <Contact />,
        },
        {
          path: "/create",
          element: isAuthenticated ? <BookForm /> : <Navigate to='/login'/>,
        },
        {
          path: "/edit/:id",
          element: isAuthenticated ? <BookForm /> : <Navigate to='/login'/>,
        },
        {
          path: "/login",
          element: !isAuthenticated ? <Login /> : <Navigate to='/'/>,
        },
      ],
    },
  ]);

  
  return authReady && <RouterProvider router={router} />;
}
