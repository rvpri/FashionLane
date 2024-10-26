import NoItemsCart from "./assets/images/NoItemsCart.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        mt: 20,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 400,
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 200,
            mt: 2,
          }}
        >
          <img
            src={NoItemsCart}
            alt="Empty Cart"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography variant="h4" gutterBottom>
          Your cart is empty!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Let's go buy something
        </Typography>
        <Button variant="contained" onClick={goToHomePage}>
          CONTINUE SHOPPING
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
