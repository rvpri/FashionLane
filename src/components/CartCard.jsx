import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/CartSlice";

const CartCard = ({ ClothItem }) => {
  const dispatch = useDispatch();
  const { id, dressName, price, image, selectedSize, quantity } = ClothItem;

  function handleRemoveFromCart() {
    dispatch(removeFromCart(id, selectedSize));
  }

  return (
    <>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          width: 500,
          padding: 2,
          marginBottom: 3,
          borderColor: "#DCDCDC",
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 120,
            flexShrink: 0,
          }}
        >
          <img
            src={image}
            alt={dressName}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{ width: 400 }}>
          <Typography sx={{ fontWeight: "bold" }} gutterBottom>
            {dressName}
          </Typography>
          <Typography variant="body2" gutterBottom>
            MRP ₹{price}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Quantity: {quantity}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Size: {selectedSize}
          </Typography>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2">
              15 days easy exchange & return
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textDecoration: "underline",
                color: "#002244",
                fontWeight: "bold",
              }}
              onClick={handleRemoveFromCart}
            >
              DELETE
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default CartCard;
