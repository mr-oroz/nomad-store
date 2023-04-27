import React from 'react';
import './main-background.scss';
import MainImg from '../../assets/images/Main.png';
const MainBackground = () => {
  return (
    <div className='main-background'>
      <h1>Nomad Store</h1>
      <span>Slogan Sloan Slogan</span>
      <img src={MainImg} alt="" />
    </div>
  );
};

export default MainBackground;