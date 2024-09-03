import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { Navbar } from "./Navbar";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar />
      {cartItems.map((item) => (
        <CartCard ClothItem={item} key={item.id} />
      ))}
    </div>
  );
};

export default Cart;
