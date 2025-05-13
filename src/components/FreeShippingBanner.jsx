import { Box, Typography } from "@mui/material";

const FreeShippingBanner = () => {
  return (
    <Box
      sx={{
        border: "2.5px solid #002244",
        padding: "8px 12px",
        borderRadius: "4px",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "1.2rem",
        }}
      >
        Free Shipping on orders above ₹500
      </Typography>
    </Box>
  );
};

export default FreeShippingBanner;
