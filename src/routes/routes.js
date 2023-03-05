import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Page/About";
import AddProduct from "../Page/AddProduct";
import Cart from "../Page/Cart";
import ManageProducts from "../Page/Dashboard/ManageProducts";
import Home from "../Page/Home";
import TopRated from "../Page/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "add-new-product",
        element: <AddProduct />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
    ],
  },
]);
console.log(routes);
export default routes;
