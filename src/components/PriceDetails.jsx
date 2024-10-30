import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const PriceDetails = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalMRP = cartItems.reduce(
    (acc, currentItem) => acc + currentItem.price,
    0
  );
  const shippingFee = totalMRP > 50 ? "Free" : 99;
  const totalPrice = totalMRP + (shippingFee === "Free" ? 0 : shippingFee);

  return (
    <div>
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
          <Typography>
            {shippingFee === "Free" ? shippingFee : `₹${shippingFee}`}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>₹{totalPrice}</Typography>
        </Box>
        <Button variant="contained" size="large" sx={{ width: 350, mt: 1.5 }}>
          CHECKOUT
        </Button>
      </Box>
    </div>
  );
};

export default PriceDetails;
