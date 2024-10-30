import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ClothCard = ({ clothingItem }) => {
  const { id, dressName, price, image } = clothingItem;

  return (
    <Card sx={{ maxWidth: 280 }}>
      <Link
        to={`/clothDetail/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={image}
        />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{dressName}</Typography>
          <Typography>₹{price}</Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ClothCard;
