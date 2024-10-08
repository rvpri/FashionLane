import React from "react";
import { clothingItems } from "./Data";
import { Stack } from "@mui/material";
import ClothCard from "./ClothCard";
import { Navbar } from "./Navbar";
import SortOptions from "./SortOptions";
import { useState } from "react";

const WomenClothing = () => {
  const [sortOrder, setSortOrder] = useState("relevance");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  console.log(sortOrder);
  const WomenClothingItems = clothingItems.filter(
    (clothingItem) => clothingItem.category === "women"
  );

  const sortedClothingItems = [...WomenClothingItems].sort((a, b) => {
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
      <SortOptions sortOrder={sortOrder} onSortChange={handleSortChange} />
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap", m: 2, justifyContent: "center" }}
      >
        {sortedClothingItems.map((womenClothingItem) => (
          <ClothCard
            key={womenClothingItem.id}
            clothingItem={womenClothingItem}
          />
        ))}
      </Stack>
    </>
  );
};

export default WomenClothing;
