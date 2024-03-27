import React from 'react';
import { useTranslation } from "react-i18next";
import cover1 from "./image/video-cover-en.jpg";
import "./Video.scss";
const Video = () => {
  const { t } = useTranslation();
  return (    
    <section className="video youtube">
      <div className="container">
      <div className="youtube__wrap">
        <div className="youtube__picture picture"> 
          <a href="https://youtu.be/FsMjQeGhiCE?si=d55KacyGZHoRoZ59" className="picture__link">
              <div className="picture__wrap">
              <div className="picture__image">             
                  <img src={cover1} alt="Macaron online course" className="picture__img" />                
                </div>
              </div> 
          </a>
        </div>
        <div className="youtube__text">
          <h2 className="youtube__description ">{t('video.picture-text')}</h2>
        </div>
      </div>   
      </div>
    </section>     
  );
};
export default Video;