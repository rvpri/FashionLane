import ClothCard from "./ClothCard";
import { useGetAllClothingItemsQuery } from "../services/clothingApi";
import { Stack } from "@mui/material";
import Loading from "./Loader";

const Clothing = () => {
  const {
    data: clothingItems = [],
    isLoading,
    isError,
  } = useGetAllClothingItemsQuery();
  if (isLoading) return <Loading />;
  if (isError) return <p>Error loading items</p>;

  return (
    <Stack>
      <Stack
        direction="row"
        spacing={4}
        useFlexGap
        sx={{ flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}
      >
        {clothingItems.map((clothingItem) => (
          <ClothCard key={clothingItem.id} clothingItem={clothingItem} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Clothing;
