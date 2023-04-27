import React from 'react';
import AboutUs from '../../components/about-us';
import MainBackground from '../../components/main-background';
import OurProduct from '../../components/our-product';
import Review from '../../components/review';
import { Link } from 'react-router-dom';
import './home-page.scss';

const HomePage = () => {

  return (
    <div  className='home-page'>
      <div className="container">
        <MainBackground />
        <AboutUs />
        <h1 className='home-page__title'>Our products</h1>
        <div className="home-page__our-products">
          <Link to={`/category/Birinchi`}>
            <OurProduct title='Birinchi' />
          </Link>
          <Link to={`/category/Ekinchi`}>
            <OurProduct title='Ekinchi' />
          </Link>
          <Link to={`/category/Uchunchu`}>
            <OurProduct title='Uchunchu' />
          </Link>
        </div>
        <div className="review">
          <h3>Testimonials</h3>
          <h1>What our client says</h1>
          <div className="reviews">
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;