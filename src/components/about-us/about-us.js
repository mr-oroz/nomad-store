import React from 'react';
import './about-us.scss';
import AboutUsImg from '../../assets/images/abou-us.png';

const AboutUs = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      className='about-us'>
      <img src={AboutUsImg} alt="" />
      <div className="about-us__text">
        <h3>About us</h3>
        <h1>Here is all you need to know about us</h1>
        <p>Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken.</p>
      </div>
    </div>
  );
};

export default AboutUs;