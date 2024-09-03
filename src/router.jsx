import { createBrowserRouter } from "react-router-dom";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import MenClothing from "./MenClothing.jsx";
import WomenClothing from "./WomenClothing.jsx";
import ClothDetail from "./ClothDetail.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/men",
    element: <MenClothing />,
  },
  {
    path: "/women",
    element: <WomenClothing />,
  },
  {
    path: "/clothDetail/:clothID",
    element: <ClothDetail />,
  },
]);
