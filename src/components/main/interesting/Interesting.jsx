import React from 'react';
import { useTranslation } from "react-i18next";
import "./Interesting.scss"

const Interesting = () => {
  const { t } = useTranslation();
  const cardList = [
    { count: "1", title: `${t('interesting.title-one')}`, description: `${t('interesting.text-one')}` },
    { count: "2", title: `${t('interesting.title-two')}`, description: `${t('interesting.text-two')}` },
    {count: "3", title: `${t('interesting.title-three')}`, description: `${t('interesting.text-three')}`},
  ]
  return (
    <section className="interesting">
      <div className="container">
        <div className="interesting__wrap">
          <div className="interesting__title">
          <h2 className="title-two">{t('main.title-one')}</h2>
        </div>
        <ul className="interesting__list">
          {cardList.map(cardItem =>
          <li key={cardItem.count} className="interesting__card card">
          <div className="card__wrap">
                <div className="card__count">{ cardItem.count }</div>
            <div className="card__body">
              <h3 className="card__title">{ cardItem.title }</h3>
              <p className="card__description">{ cardItem.description }</p>
            </div>
          </div>
        </li>  
          )}
      </ul>
      </div>
      </div>
      </section>
    
  );
};

export default Interesting;