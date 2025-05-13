import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import FreeShippingBanner from "./FreeShippingBanner";

const PriceDetails = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalMRP = cartItems.reduce(
    (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
    0
  );
  const shippingFee = totalMRP > 500 ? 0 : 99;
  const totalPrice = totalMRP + shippingFee;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 350,
          borderColor: "#DCDCDC",
          borderWidth: 1,
          borderStyle: "solid",
          padding: 3,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total MRP</Typography>
          <Typography>₹{totalMRP}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Shipping fee</Typography>
          <Typography>₹{shippingFee}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>₹{totalPrice}</Typography>
        </Box>
        <Button variant="contained" size="large" sx={{ width: 350, mt: 1.5 }}>
          CHECKOUT
        </Button>
      </Box>

      <FreeShippingBanner />
    </Box>
  );
};

export default PriceDetails;
