import React, { useEffect, useState } from "react";
import ClothCard from "./ClothCard";
import { clothingItems } from "./Data";
import { Stack } from "@mui/material";

const Clothing = () => {
  return (
    <Stack
      direction="row"
      spacing={4}
      useFlexGap
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {clothingItems.map((clothingItem) => (
        <ClothCard key={clothingItem.id} clothingItem={clothingItem} />
      ))}
    </Stack>
  );
};

export default Clothing;
