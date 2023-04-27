import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './home-page';
import CategoryPage from './category-page';
import DetailPage from './detail-page';

const MainPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='main-page'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/detail/:title" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default MainPage;