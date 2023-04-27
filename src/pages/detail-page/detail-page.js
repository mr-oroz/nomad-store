import React, { useState } from 'react';
import './detail-page.scss';
import { useParams } from 'react-router-dom';
import Review from '../../components/review';
import DetailImg from '../../assets/images/detail.png'
import DetailImg1 from '../../assets/images/detail1.png'
import DetailImg2 from '../../assets/images/detail2.png'
import DetailImg3 from '../../assets/images/detail3.png'
import SwiperSroll from '../../components/swiper-scroll';
import RatingComponent from '../../components/rating-component/rating-component';


const DetailPage = () => {
  const [active, setActive] = useState(0)
  const [data, setData] = useState([
    { img: DetailImg, id: 0 },
    { img: DetailImg1, id: 1 },
    { img: DetailImg2, id: 2 },
    { img: DetailImg3, id: 3 },
  ])
  const [rating, setRating] = useState(4.5)
  // получаем параметр оттуда category-page
  const { title } = useParams();

  return (
    <div className='detail-page'>
      <div className="container">
        <h4 className='page-text'> - {title}</h4>
        <div className="content">
          <h3 className='page-length'>09 products</h3>
          <div className="wrapper">
            <div className="detail-page__left">
              <img className='detail-page__mainImg' src={data[active].img} alt="" />
              <div className="detail-page__variants">
                <SwiperSroll
                  data={data}
                  setActive={setActive}
                />
              </div>
            </div>
            <div className="detail-page__right">
              <h5 className='detail-page__right-text'>RMX-900</h5>
              <h2>{title}</h2>
              <span className='detail-page__right-price'>$190</span>
              <div className="detail-page__rating-product">
                <span className='detail-page__rating-number'>{rating}/5</span>
                <RatingComponent 
                  value={rating}
                  size="large"
                  setValue={setRating}/>
                <span className='detail-page__rating-text'>See all 18 reviews</span>
              </div>
              
              <div className="detail-page__colors">
                <div className='color-item1 color-item'></div>
                <div className='color-item2 color-item'></div>
                <div className='color-item3 color-item'></div>
                <div className='color-item4 color-item'></div>
              </div>
              <div className="detail-page__sizes">
                <div className="small"></div>
                <div className="medium"></div>
              </div>
              <div className="detail-page__btns">

              </div>
            </div>
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
    </div>
  );
};

export default DetailPage;