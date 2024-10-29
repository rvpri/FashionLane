import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart.jsx";
import MenClothing from "./pages/MenClothing.jsx";
import WomenClothing from "./pages/WomenClothing";
import ClothDetail from "./components/ClothDetail";

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
