import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import "swiper/scss/effect-coverflow";
import "swiper/scss/mousewheel";
import "./Swiper.scss";
import { Pagination, EffectCoverflow, Navigation, Mousewheel } from 'swiper/modules';
import name1 from "./image/img1.jpg";
import name2 from "./image/img11.jpg";
import name3 from "./image/img12.jpg";
import name4 from "./image/img13.jpg";
import name5 from "./image/img10.jpg";
import name6 from "./image/img15.jpg";
import name7 from "./image/img16.jpg";
import name8 from "./image/img17.jpg";
import name9 from "./image/img18.jpg";
import name10 from "./image/img19.jpg";
import name11 from "./image/img21.jpg";
import name12 from "./image/img22.jpg";
import name13 from "./image/img23.jpg";
import name14 from "./image/img24.jpg";
import name15 from "./image/img25.jpg";
import name16 from "./image/img26.jpg";
import name17 from "./image/img27.jpg";
import name18 from "./image/img28.jpg";
import name19 from "./image/img29.jpg";
const Slider = () => {
  const sliderList = [`${name1}`, `${name2}`,`${name3}`,`${name4}`,`${name5}`,`${name6}`,`${name7}`,`${name8}`,`${name9}`,`${name10}`,`${name11}`,`${name12}`,`${name13}`,`${name14}`,`${name15}`,`${name16}`,`${name17}`,`${name18}`,`${name19}`,]
  return (
    <div className='slider'>
      <div className="slider__wrap">
        <div className="container">
          <Swiper 
            className='swiper-container'
            modules={[  Pagination, EffectCoverflow, Navigation,  Mousewheel ]}
            spaceBetween={50}
            slidesPerView={4}
            pagination={true}
            navigation
            scrollbar={{ draggable: true }} 
            //effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            mousewheel={{
              sensitivity: 1,
              //eventsTarget: ".swiper-wrapper"
            }}
            //slidesPerView = {"auto"}
            coverflowEffect={{
              rotate: 0,
              strech: 0,
              depth: 120,
              //slideShadows: true,
              modifier: 5,
              modifer: 0,
            }}        
          >
            {sliderList.map((item) =>( <SwiperSlide key={item.toString()} className='swiper-slide'><img src={ item} alt="macaron"/>  </SwiperSlide>))}
          </Swiper> 
        </div>
      </div>
    </div>
  );
};
export default Slider;