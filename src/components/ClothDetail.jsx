import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Navbar } from "./Navbar.jsx";
import Button from "@mui/material/Button";
import { clothingItems } from "../Data.js";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../store/CartSlice";
import store from "../store/Store";

const ClothDetail = () => {
  const { clothID } = useParams();
  const [selectedSize, setSelectedSize] = useState("S");
  const dispatch = useDispatch();

  const dressDetail = clothingItems.find(
    (clothingItem) => clothingItem.id === parseInt(clothID)
  );

  const { id, dressName, price, image } = dressDetail;

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  function handleAddToCart() {
    dispatch(AddToCart(id, dressName, price, image, selectedSize));
    console.log("Updated Redux Store:", store.getState());
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: 1000,
          height: 400,
          margin: "auto",
          marginTop: 10,
        }}
      >
        <Stack direction="row" spacing={4}>
          <Box
            sx={{
              width: 300,
              height: 400,
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
          <Box>
            <Typography variant="h4" gutterBottom>
              {dressDetail.dressName}
            </Typography>
            <Typography variant="h5">MRP ₹{price}</Typography>
            <Typography
              variant="body1"
              sx={{ color: "#9e9e9e", fontSize: ".90rem" }}
            >
              Price inclusive of all taxes
            </Typography>
            <Stack spacing={1} direction="row" sx={{ mt: 3 }}>
              <Button
                variant={selectedSize == "S" ? "contained" : "outlined"}
                onClick={() => handleSizeSelect("S")}
              >
                S
              </Button>
              <Button
                variant={selectedSize == "M" ? "contained" : "outlined"}
                onClick={() => handleSizeSelect("M")}
              >
                M
              </Button>
              <Button
                variant={selectedSize == "L" ? "contained" : "outlined"}
                onClick={() => handleSizeSelect("L")}
              >
                L
              </Button>
            </Stack>
            <Button
              variant="contained"
              size="large"
              sx={{ width: 210, mt: 1.5 }}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
            <Typography variant="h6" sx={{ mt: 3 }}>
              Overview
            </Typography>
            <Typography>
              Add elegance to your casual collection with this tunic. It
              features an elegant lace detail yoke, V-neck, three-quarter
              sleeves, and a ruffled hem. The modern silhouette blends perfectly
              with traditional craftsmanship.
            </Typography>

            <Typography sx={{ mt: 3 }}>
              15 days easy exchange & return (conditions apply)
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ClothDetail;
