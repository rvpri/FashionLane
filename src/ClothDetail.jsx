import React from "react";
import ChicBlueTop from "./assets/Images/ChicBlueTop.png";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Navbar } from "./Navbar";
import Button from "@mui/material/Button";
import { clothingItems } from "./Data";
import { useParams } from "react-router";

const data = {
  id: 1,
  dressName: "Chic Blue Top",
  price: 29.99,
  image: ChicBlueTop,
  category: "women",
};
const ClothDetail = () => {
  const { clothID } = useParams();
  const dressDetail = clothingItems.find(
    (clothingItem) => clothingItem.id === parseInt(clothID)
  );
  console.log(dressDetail);

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
              src={dressDetail.image}
              alt={dressDetail.dressName}
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
            <Typography variant="h5">MRP ₹{dressDetail.price}</Typography>
            <Typography
              variant="body1"
              sx={{ color: "#9e9e9e", fontSize: ".90rem" }}
            >
              Price inclusive of all taxes
            </Typography>
            <Stack spacing={1} direction="row" sx={{ mt: 3 }}>
              <Button variant="outlined">S</Button>
              <Button variant="outlined">M</Button>
              <Button variant="outlined">L</Button>
            </Stack>
            <Button
              variant="contained"
              size="large"
              sx={{ width: 210, mt: 1.5 }}
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
