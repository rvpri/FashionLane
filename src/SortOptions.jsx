import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortOptions({sortOrder, onSortChange}) {

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={sortOrder}
          onChange={onSortChange}
        >
          <MenuItem value="relevance">Relevance</MenuItem>
          <MenuItem value="lowToHigh">Price - Low to High</MenuItem>
          <MenuItem value="highToLow">Price - High to Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}