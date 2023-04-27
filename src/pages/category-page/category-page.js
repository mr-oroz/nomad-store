import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductItem from '../../components/product-item';
import './category-page.scss';
import MyButton from '../../components/my-button/my-button';
import { aboutList } from '../../utils/utlls';

const CategoryPage = () => {

  // получаем параметр оттуда home-page;
  const { slug } = useParams();
  
  return (
    <div className='category-page'>
      <div className="container">
        <h4 className='page-text'>Home - {slug}</h4>
        <div className="content">
          <h1 className='page-title'>{slug}</h1>
          <h3 className='page-length'>09 products</h3>
          <div className="wrapper">
            {
              aboutList.map(item => {
                return <Link to={`/detail/${item.title}`}>
                  <ProductItem key={item.id} />
                </Link>
              })
            }
          </div>
          <MyButton color='#E20242'>Load more</MyButton>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;