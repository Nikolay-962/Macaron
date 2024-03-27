import React from 'react';
import { useTranslation } from "react-i18next";
import "./Learn.scss"

const Learn = () => {
  const { t } = useTranslation();

  const learnItems = [`${t('learn.1')}`, ` ${t('learn.2')}`, `${t('learn.3')}`, `${t('learn.4')}`, `${t('learn.5')}`, ` ${t('learn.6')}`, `${t('learn.7')}`]
  return (
    <section className="learns">
      <div className="container">
        <div className="learns__wrap">  
          <div className='learn'>      
            <div className="learn__title">
              <h2 className="title-two">{t('learn.title')}</h2>
            </div>
            <ul className="learn__list">
              {learnItems.map((item) => (<li key={item.toString()} className="learn__item">{item}</li>))}
            </ul>
          </div>
          </div>
        </div>
    </section>
  );
};
export default Learn;