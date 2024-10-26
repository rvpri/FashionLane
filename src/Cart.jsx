import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import Box from "@mui/material/Box";
import EmptyCart from "./EmptyCart";
import LoadedCart from "./LoadedCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems.length);
  return (
    <Box>
      <Navbar />
      {cartItems.length ? <LoadedCart cartItems={cartItems} /> : <EmptyCart />}
    </Box>
  );
};

export default Cart;
