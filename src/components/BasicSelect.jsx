import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({availability, setAvailability}) {

  const handleChange = (event) => {
    setAvailability(event.target.value);

  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Availability</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={availability}
          label="Availability"
          onChange={handleChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'inStock'}>In stock</MenuItem>
          <MenuItem value={'notInStock'}>Not in stock</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}