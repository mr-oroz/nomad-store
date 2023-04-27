import React, { useState } from 'react';
import './nav.scss';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Nav = () => {
  const [search, setSearch] = useState('');
  const [found, setFound] = useState(1);
  const [list, setList] = useState([
    { title: 'New', id: 1, route: 'new' },
    { title: 'Souvenirs', id: 2, route: 'souvenirs' },
    { title: 'Honey', id: 3, route: 'honey' },
    { title: 'Kids', id: 4, route: 'kids' },
    { title: 'Magazine', id: 5, route: 'magazine' },

  ])
  return (
    <nav className='nav'>
      <div className="container">
        <div className="content">
          <ul>
            {
              list.map((item) => {
                return <li key={item.id}><Link
                  onClick={() => { setFound(item.id) }}
                  className={found === item.id ? 'active' : ''}
                  to={`/${item.route}`}>{item.title}</Link></li>
              })
            }
          </ul>
          <div className="search">
            <SearchIcon />
            <input
              placeholder='Search for products'
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="text" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;