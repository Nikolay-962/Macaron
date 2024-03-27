import React from 'react';
import "./Recive.scss";
import { useTranslation } from "react-i18next";
import icon1 from "./image/lava.png";
import icon2 from "./image/telegramm.png";
import icon3 from "./image/youtube.png";
import icon4 from "./image/cook.svg";
import icon5 from "./image/whatsapp.png";
import icon6 from "./image/instagram.png";

const Recive = () => {
  const { t } = useTranslation();
  const reciveList = [
    { id: "1", icon: `${icon1}`, alt: "icon", text: `${t('recive.1')}`, strong: `${t('recive.strong1')}`, after: `${t('recive.1.1')}` },
    { id: "2", icon: `${icon2}`, alt: "icon", text: `${t('recive.2')}`,  strong: `${t('recive.strong2')}`, after: `${t('recive.2.1')}`  },
    { id: "3", icon: `${icon3}`, alt: "icon", text: `${t('recive.3')}` },
    {id: "4", icon: `${icon4}`, alt: "icon", text: `${t('recive.4')}`}
  ]
  const socealList = [
    { id: "1", icon: `${icon2}`, link: "https://t.me/macaron_by_elena", alt: "icon", description: "Telegram"},
  { id: "2", icon: `${icon5}`, link: "https://wa.me/message/ZVYTBBN3N7SNI1", alt: "icon", description: "Whatsapp"},
  {id: "3", icon: `${icon6}`, link: "https://www.instagram.com/macaron_by_elena", alt: "icon", description: "Instagram"},
  ]
  return (
    <section className='recive'>
      <div className="recive__wrap">
        <div className="container">
          <div className="recive__title">
            <h2 className="title-two">Как получить курс</h2>
          </div>
          <div className="recive-list">
            <ul className="recive-list__list">
              {reciveList.map((item) => (<li key={item.id} className="recive-list__item">
                <div className="recive-list__image">
                  <img src={item.icon} alt="иконка лава" className="recive-list__img" />
                </div>
                <div className="recive-list__text">{item.text}<strong>{item.strong}</strong>{ item.after}</div>
              </li>))}
            </ul>
          </div>
          <div className="social">
            <ul className="social__list">
              {socealList.map((item)=> (<li key={item.id} className="social__item">
                <a href={item.link} className="social__link">
                  <div className="social__image">
                    <img src={item.icon} alt={item.alt} className="social__img" />
                  </div>
                  <div className="social__gescription">{ item.description}</div>
                </a>
              </li>))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Recive;