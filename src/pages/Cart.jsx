import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import EmptyCart from "../components/EmptyCart";
import LoadedCart from "../components/LoadedCart";
import { Navbar } from "../components/Navbar";

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
