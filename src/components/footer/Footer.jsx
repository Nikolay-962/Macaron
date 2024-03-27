import React from 'react';
import { useTranslation } from "react-i18next";
import "./Footer.scss";
import foot1 from "./image/telegram.svg";
import foot2 from "./image/whatsap.svg";
import foot3 from "./image/email.svg";

const Footer = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false)
  const sociList = [
    { id: "1", image: `${foot1}`, alt: "icon-telegramm", link: "https://t.me/macaron_by_elena" },
    { id: "2", image: `${foot2}`, alt: "icon-watcapp", link: "https://wa.me/message/ZVYTBBN3N7SNI1" },
    { id: "3", image: `${foot3}`, alt: "icon-email", link: "mailto:aleksprowork@gmail.com" }
  ]
  const primacyList = [
    { id: "1", text: `${t('footer.t1')}`, description: `${t('footer.d1')}` },
    { id: "2", text: `${t('footer.t2')}`, description: `${t('footer.d2')}` },
    { id: "3", text: `${t('footer.t3')}`, description: `${t('footer.d3')}` },
    { id: "4", text: `${t('footer.t4')}`, description: `${t('footer.d4')}` },
    { id: "5", text: `${t('footer.t5')}`, email: `${t('footer.email')}`, link: "/", description: `${t('footer.d5')}` },
    {id: "6", text: `${t('footer.t6')}`, description:  `${t('footer.d6')}` }
  ]
  return (
    <footer className='footer'>
      <div className="footer__wrap">
        <div className="container">
          <div className="footer__title">
            <h3 className="title-three">{t('footer.title')}</h3>
          </div>
          <div className="footer__link socials">
            <ul className="socials__list">
              {sociList.map((item)=> (<li key={item.id} className="socials__item">
                <a href={item.link} className="socials__link">
                  <div className="socials__image">
                    <img src={item.image} alt={item.alt} className="socials__img" />
                  </div>
                </a>
              </li>
              ))}
            </ul>
          </div>
          <summary className='footer__privacy summary'>
            <button onClick={() => setIsOpen(!isOpen)} className={`summary__btn ${isOpen ? "summary__btn--open" : ""}`}>
              {t('footer.summary')}
            </button>
          </summary>
          {primacyList.map((elem) => (<dl key={elem.id} className={`summary__list ${isOpen ? "active" : ""}`}>
            <dt className="summary__title">{ elem.text}</dt>
            <dd className="summary__text">{elem.description}
              <a href={elem.link} className="summary__link">
              <strong>{elem.email}</strong>
              </a>
            </dd>
          </dl>))}
          <div className="footer__logo">
            2021-2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;