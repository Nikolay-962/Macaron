import React from 'react';
import { useTranslation } from "react-i18next";
import about1 from "./image/about.jpg"
import about2 from "./image/about2.jpg"
import "./About.scss"

const About = () => {
  const { t } = useTranslation();
  const aboutList = [
   `${t('about.description1')}`, `${t('about.description2')}`, `${t('about.description3')}`,
  ]
  const aboutText = [
    `${t('about.text1')}`, `${t('about.text2')}`, `${t('about.text3')}`, `${t('about.text4')}`
  ]
  return (
    <section className='section-about' id='about'>
      <div className="section-about__wrap">
        <div className="container">
          <div className="section-about__title">
            <h2 className="title-two">{t('about.title')}</h2>
          </div>
          <ul className="section-about__list">
            {aboutList.map((item) => (<li key={item.toString()} className="section-about__description">{item}</li>))}
          </ul>
          <div className="about">
            <div className="about__image about__image--top">
              <img src={about1} alt="Приготовление макарон" className="about__img about__img--top" />
            </div>
            {aboutText.map((item) => (<p key={item.toString()} className="about__text">{item}</p>))}
            <p className="about__text about__text--bottom">
              {t('about.text5')}
            </p>
            <p className="about__text about__text--bottom">
              {t('about.text6')}
              </p>
            <div className="about__image about__image--bottom">
              <img src={about2} alt="Приготовление макарон" className="about__img about__img--bottom" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;