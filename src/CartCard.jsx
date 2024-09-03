import { Card, Stack } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

const CartCard = ({ ClothItem }) => {
  console.log(ClothItem);

  const { dressName, price, image } = ClothItem;
  return (
    <>
    <Stack direction="row" spacing={4}>
      <Card>
        <CardContent>
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
            /> </Box>
              </CardContent>
              </Card>
        <Box>
        <Typography variant="h6" gutterBottom>
              {dressName}
            </Typography>
            <Typography >MRP ₹{price}</Typography>
            </Box>
    </Stack>
    </>
  );
};

export default CartCard;
