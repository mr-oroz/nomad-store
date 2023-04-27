import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import '../../assets/styles/fonts.scss';

const MyButton = ({ children, color }) => {

  const ColorButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: color,
    height: '80px',
    width: "80%",
    maxWidth: '561px',
    textTransform: 'capitalize',
    fontFamily: 'Work Sans',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '24px',
    margin: '50px 10px',
    '&:hover': {
      backgroundColor: color,
    },
  }));

  return (
    <ColorButton
      variant="contained">
      {children}
    </ColorButton>
  );
};

export default MyButton;