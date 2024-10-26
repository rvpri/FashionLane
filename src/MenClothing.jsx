import React from "react";
import { clothingItems } from "./Data";
import { Stack } from "@mui/material";
import ClothCard from "./ClothCard";
import { Navbar } from "./Navbar";
import SortOptions from "./SortOptions";
import { useState } from "react";
import Box from "@mui/material/Box";

const MenClothing = () => {
  const [sortOrder, setSortOrder] = useState("relevance");
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const MenClothingItems = clothingItems.filter(
    (clothingItem) => clothingItem.category === "men"
  );

  const sortedClothingItems = [...MenClothingItems].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SortOptions sortOrder={sortOrder} onSortChange={handleSortChange} />
      </Box>
      <Stack
        spacing={{ xs: 3, sm: 3 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap", m: 2, justifyContent: "center" }}
      >
        {sortedClothingItems.map((menClothingItem) => (
          <ClothCard key={menClothingItem.id} clothingItem={menClothingItem} />
        ))}
      </Stack>
    </>
  );
};

export default MenClothing;
