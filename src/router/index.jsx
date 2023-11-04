import { createBrowserRouter } from "react-router-dom";
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
        path: "/commission",
        element: <Commission />,
      },
      
    ],
  },
]);

export default router;
