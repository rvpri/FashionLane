import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { AddToCart } from "./CartSlice";
import { Link } from "react-router-dom";

const ClothCard = ({ clothingItem }) => {
  const { id, dressName, price, image } = clothingItem;

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(AddToCart(id, dressName, price, image));
  }

  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={image}
      />
      <CardContent>
        <Typography>
          <Link to={`/clothDetail/${id}`}>{dressName} </Link>
        </Typography>
        <Typography>{price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ClothCard;
