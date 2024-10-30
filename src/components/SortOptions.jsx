import * as React from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Typography,
  Stack,
} from "@mui/material";

export default function SortOptions({ sortOrder, onSortChange, category }) {
  const shopForCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        sx={{
          justifyContent: "space-between",
          width: "90vw",
          margin: "10px 0",
        }}
      >
        <Typography variant="h6">SHOP FOR: {shopForCategory} </Typography>
        <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            SORT BY{" "}
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
            <Select value={sortOrder} onChange={onSortChange}>
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="lowToHigh">Price - Low to High</MenuItem>
              <MenuItem value="highToLow">Price - High to Low</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </div>
  );
}
