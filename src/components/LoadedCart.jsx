import PriceDetails from "./PriceDetails";
import Stack from "@mui/material/Stack";
import CartCard from "./CartCard";

const LoadedCart = ({ cartItems }) => {
  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{ display: "flex", justifyContent: "space-around", marginTop: 5 }}
    >
      <Stack direction="column" spacing={4}>
        {cartItems.map((item) => (
          <CartCard ClothItem={item} key={`${item.id}-${item.selectedSize}`} />
        ))}
      </Stack>
      <PriceDetails />
    </Stack>
  );
};

export default LoadedCart;
