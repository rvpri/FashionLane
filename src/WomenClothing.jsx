import React from "react";
import { clothingItems } from "./Data";
import { Stack } from "@mui/material";
import ClothCard from "./ClothCard";
import { Navbar } from "./Navbar";

const MenClothing = () => {
  const MenClothingItems = clothingItems.filter(
    (clothingItem) => clothingItem.category === "women"
  );

  return (
    <>
      <Navbar />
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap", m: 2 }}
      >
        {MenClothingItems.map((womenClothingItem) => (
          <ClothCard key={womenClothingItem.id} clothingItem={womenClothingItem} />
        ))}
      </Stack>
    </>
  );
};

export default MenClothing;
