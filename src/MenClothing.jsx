import React from "react";
import { clothingItems } from "./Data";
import { Stack } from "@mui/material";
import ClothCard from "./ClothCard";
import { Navbar } from "./Navbar";

const MenClothing = () => {
  const MenClothingItems = clothingItems.filter(
    (clothingItem) => clothingItem.category === "men"
  );

  return (
    <>
      <Navbar />
      <Stack
        spacing={{ xs: 3, sm: 3 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap", m: 2, justifyContent: "center" }}
      >
        {MenClothingItems.map((menClothingItem) => (
          <ClothCard key={menClothingItem.id} clothingItem={menClothingItem} />
        ))}
      </Stack>
    </>
  );
};

export default MenClothing;
