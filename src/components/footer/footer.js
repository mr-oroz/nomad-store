import React, { useState } from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import Social from '../social';
import { aboutList } from '../../utils/utlls';
import SendEmail from '../send-email';

const Footer = () => {
  const [active, setActive] = useState(null);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello world')
    setValue('')
  }
  return (
    <footer className='footer'>
      <div className="container">
        <div className="content">
          <div className="contact">
            <h1 className='logo'><Link to='/'>luxe</Link></h1>
            <div className="address">
              <Link to='/'>Copyright © 2021 Luxe</Link>
              <Link to='/'>All rights reserved</Link>
            </div>
            <Social />
          </div>
          <div className="about">
            <ul>
              {aboutList.map((item) => {
                return <li key={item.id}>
                  <Link
                    onClick={() => setActive(item.id)}
                    className={active === item.id ? 'active' : ''}
                    to={`/${item.route}`}>{item.title}</Link>
                </li>
              })}
            </ul>
          </div>
          <SendEmail 
            value={value} 
            setValue={setValue} 
            handleSubmit={handleSubmit}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;