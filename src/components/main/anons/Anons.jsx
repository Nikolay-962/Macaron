import React from 'react';
import { useTranslation } from "react-i18next";
import "./Anons.scss"

const Anons = () => {
  const { t } = useTranslation();
  const cardList = [
    {id: "1", title: `${t('anons.title-one')}`, link: "https://youtu.be/OypiTBK4duY?si=L0m4gp79fMQ5RfLa", description: `${t('anons.text-one')}`, button:`${t('anons.link-one')}` },
    { id: "2", title: `${t('anons.title-two')}`, link: "https://macaron-by-elena.com/files/confi-ru.pdf", description: `${t('anons.text-two')}`, button:`${t('anons.link-two')}` },
    {id: "3", title: `${t('anons.title-three')}`, link: "https://wa.me/message/ZVYTBBN3N7SNI1", description: `${t('anons.text-three')}`, button:`${t('anons.link-three')}`},
]
  return (
    <section className='anons'>
      <div className="container">
      <div className="anons__wrap">
        <div className="anons__title a-title">
          <h2 className="a-title__text">{t('anons.title')}</h2>
        </div>
        <div className="anons__section course">
          <ul className="course__list">
              {cardList.map(cardItem => <li key={cardItem.id} className="course__item a-card">
                <div className="a-card__wrap">
                <h3 className="a-card__title">{cardItem.title}</h3>
              <div className="a-card__description">{cardItem.description}</div>
                <a href={cardItem.link} className="a-card__btn btn">{cardItem.button}</a>
              </div>
            </li>
              )}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};
export default Anons;
/*
Function.prototype.apply.call(console[level], console, argsWithFormat);
*/