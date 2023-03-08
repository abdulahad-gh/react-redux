import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Page/About";
import AddProduct from "../Page/Dashboard/Pages/AddProduct";
import Cart from "../Page/Cart";
import DashboardMain from "../Page/Dashboard/DashboardMain";
import ManageProducts from "../Page/Dashboard/Pages/ManageProducts";
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
        path:"dashboard",
        element: <DashboardMain/>,
        children:[
          {
            path: "manage-products",
            element: <ManageProducts />,
            index:true            
          },
          {
            path: "add-new-product",
            element: <AddProduct />,
            
          },
         
        ]
      

      }
    ],

    
  },
  
]);
console.log(routes);
export default routes;
