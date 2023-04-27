import React from 'react';
import Rating from '@mui/material/Rating';

const RatingComponent = ({ value, setValue, size }) => {
  return (
    <Rating
      size={size}
      precision={0.5}
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export default RatingComponent;