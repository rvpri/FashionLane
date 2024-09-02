import React from 'react';
import { useSelector } from 'react-redux';

const Cart= () => {
  // Access cart state from the Redux store
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.dressName}</h2>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
