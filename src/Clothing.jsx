import React, { useEffect, useState } from "react";
import ClothCard from "./ClothCard";
import { clothingItems } from "./Data";
import { Stack } from "@mui/material";

// const clothingItems = [
//   {
//     id: 1,
//     dressName: "Pink Top",
//     price: 29.99,
//     image: PinkTop,
//   },
//   {
//     id: 2,
//     dressName: "Blue Denim Jacket",
//     price: 49.99,
//     image: PinkTop,
//   },
//   {
//     id: 3,
//     dressName: "Green Maxi Dress",
//     price: 69.99,
//     image: PinkTop,
//   },
//   {
//     id: 4,
//     dressName: "Black Leather Skirt",
//     price: 39.99,
//     image: PinkTop,
//   },
//   {
//     id: 5,
//     dressName: "White Blouse",
//     price: 34.99,
//     image: PinkTop,
//   },
//   {
//     id: 6,
//     dressName: "Red Wrap Dress",
//     price: 59.99,
//     image: PinkTop,
//   },
//   {
//     id: 7,
//     dressName: "Purple Playsuit",
//     price: 44.99,
//     image: PinkTop,
//   },
//   {
//     id: 8,
//     dressName: "Orange Sundress",
//     price: 54.99,
//     image: PinkTop,
//   },
//   {
//     id: 9,
//     dressName: "Yellow Turtleneck",
//     price: 39.99,
//     image: PinkTop,
//   },
//   {
//     id: 10,
//     dressName: "Beige Wide-Leg Trousers",
//     price: 49.99,
//     image: PinkTop,
//   },
// ];

const Clothing = () => {
  return (
    <Stack direction="row" spacing={4} useFlexGap sx={{ flexWrap: "wrap" }}>
      {clothingItems.map((clothingItem) => (
        <ClothCard key={clothingItem.id} clothingItem={clothingItem} />
      ))} 
    </Stack>
  );
};

export default Clothing;
