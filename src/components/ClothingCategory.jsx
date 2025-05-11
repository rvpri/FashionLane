import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { useGetClothingItemsByCategoryQuery } from "../services/clothingApi";
import ClothCard from "./ClothCard";
import { Navbar } from "./Navbar";
import SortOptions from "./SortOptions";
import Loading from "./Loader";

const ClothingCategory = ({ category }) => {
  const [sortOrder, setSortOrder] = useState("relevance");
  const {
    data: clothingItems = [],
    isLoading,
    isError,
  } = useGetClothingItemsByCategoryQuery(category);

  if (isLoading) return <Loading />;
  if (isError) return <p>Error loading items</p>;

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedClothingItems = [...clothingItems].sort((a, b) => {
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
        <SortOptions
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
          category={category}
        />
      </Box>
      <Stack
        spacing={{ xs: 3, sm: 4 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap", m: 2, justifyContent: "center" }}
      >
        {sortedClothingItems.map((ClothingItem) => (
          <ClothCard key={ClothingItem.id} clothingItem={ClothingItem} />
        ))}
      </Stack>
    </>
  );
};

export default ClothingCategory;
