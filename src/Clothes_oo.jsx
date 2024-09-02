import ClothCard from "./ClothCard";

const clothingItems = [
  {
    id: 1,
    dressName: "Chic Blue Top",
    price: 29.99,
    image: "PinkTop",
  },
  {
    id: 2,
    dressName: "Relaxed Fit Jacket",
    price: 49.99,
    image: "PinkTop",
  },
  {
    id: 3,
    dressName: "Floral Top",
    price: 69.99,
    image: "PinkTop",
  },
  {
    id: 4,
    dressName: "Grey T-shirt",
    price: 39.99,
    image: "PinkTop",
  },
  {
    id: 5,
    dressName: "Textured Maroon Sweater",
    price: 34.99,
    image: "PinkTop",
  },
  {
    id: 6,
    dressName: "Blue Demin Jacket",
    price: 59.99,
    image: "PinkTop",
  },
  {
    id: 7,
    dressName: "Black T-shirt",
    price: 44.99,
    image: "PinkTop",
  },
  {
    id: 8,
    dressName: "Orange Sundress",
    price: 54.99,
    image: "PinkTop",
  },
  {
    id: 9,
    dressName: "Yellow Turtleneck",
    price: 39.99,
    image: "PinkTop",
  },
  {
    id: 10,
    dressName: "Beige Wide-Leg Trousers",
    price: 49.99,
    image: "PinkTop",
  },
];

const Clothes = () => {
  return (
    <div>
      {clothingItems.map((clothingItem) => (
        <ClothCard key={clothingItem.id} clothingItem={clothingItem} />
      ))}
    </div>
  );
};

export default Clothes;
