import React, {useEffect} from 'react';
import Footer from './components/footer';
import Header from './components/header';
import MainPage from './pages/main-page';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className='app'>
      <Header />
      <MainPage/>
      <Footer />
    </div>
  );
};

export default App;