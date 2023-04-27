import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Nav from '../nav';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="content">
          <Link to='/'><h1 className='logo'>luxe</h1></Link>
          <div className="person">
            <ul>
              <li><Link to='/account'><PermIdentityIcon/> My account</Link></li>
              <li><Link to='/favourites'><FavoriteBorderIcon/> Favourites</Link></li>
              <li><Link to='/bag'><ShoppingBagIcon/> Bag</Link></li>
            </ul>
          </div>
        </div>
        <Nav/>
      </div>
    </header>
  );
};

export default Header;