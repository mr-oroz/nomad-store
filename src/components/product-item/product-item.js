import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from '../../assets/images/image 10.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./product-item.scss";


const ProductItem = () => {
  return (
    <Card classname="product-item"
      sx={{ maxWidth: 405 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="406"
          image={Image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Luxe 2 series
          </Typography>
          <Typography style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }} variant="body2" color="text.secondary">
            $23,000
            <FavoriteBorderIcon fontSize='small' />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductItem;