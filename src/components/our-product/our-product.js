import React from 'react';
import './our-product.scss';
import OurProductImg from '../../assets/images/our-product.png';

const OurProduct = ({ title }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      className='our-product'>
      <img src={OurProductImg} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default OurProduct;