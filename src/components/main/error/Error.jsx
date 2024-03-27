import React from 'react';
import { useTranslation } from "react-i18next";
import "./Error.scss"
import bad1 from "./image/bad1.jpg";
import bad2 from "./image/bad2.jpg";
import bad3 from "./image/bad3.jpg";
import bad4 from "./image/bad4.jpg";
import bad5 from "./image/bad5.jpg";

const Error = () => {
  const { t } = useTranslation();
  const errorItems = [`${t('error.1')}`, ` ${t('error.2')}`, `${t('error.3')}`, `${t('error.4')}`, `${t('error.5')}`, ` ${t('error.6')}`, `${t('error.7')}`, `${t('error.8')}`]
  const errorImg = [
    {id: 0, url: `${bad1}`, alt: 'плохая крышечка' },
    {id: 1, url: `${bad2}`, alt: 'плохая крышечка'},
    {id: 2, url: `${bad3}`, alt: 'плохая крышечка'},
    {id: 3, url: `${bad4}`, alt: 'плохая крышечка'},
    {id: 4, url: `${bad5}`, alt: 'плохая крышечка'} 
    ]
  return (
    <section className="errors">
      <div className="container">
        <div className="errors__wrap">  
          <div className='error'>      
            <div className="error__title">
              <h2 className="title-two">{t('error.title')}</h2>
              <div className="error-description">{t('error.description')}</div>
            </div>
            <div className="error__wrap">
              <div className="error-text">
                <ul className="error-text__list">
                  {errorItems.map((item) => (<li key={item.toString()} className="error-text__item">{item}</li>))}
                </ul>
              </div>
              <div className="error-image">
              <ul className="error-image__list">
                {errorImg.map(item => <li key={item.id} className="error-image__item">
                    <img src={item.url} alt={item.alt} className="error-image__img" />
                  </li>)}
              </ul>
              </div>
             </div>
          </div>
          </div>
        </div>
    </section>
  );
};
export default Error;