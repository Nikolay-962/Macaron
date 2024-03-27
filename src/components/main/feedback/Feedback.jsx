import React from 'react';
import { useTranslation } from "react-i18next";
import "./Feedback.scss";
import Carusel from './Carusel';
import photo1 from "./image/estonia.jpg";
import photo2 from "./image/turkiye.jpg";
import photo3 from "./image/newyork.jpg";
import photo4 from "./image/canada.jpg";
import photo5 from "./image/britan.jpg";
import photo6 from "./image/inst-mehiko.jpg";
import photo7 from "./image/inst-bruklin.jpg"

const Feedback = () => {
  const { t } = useTranslation();
  const postList = [
    { id: "1", title: `${t('feedback.title-post1')}`,  name: "kristinescakes_elva", photo: `${photo1}`, alt: "user photo", text: "kristinecakes_elva", description: `${t('feedback.post1')}`, next: `${t('feedback.next')}`, prev:`${t('feedback.prev')}`, link: "https://www.instagram.com/kristinescakes_elva/",  btn: `${t('feedback.button')}` },
    { id: "2", title: `${t('feedback.title-post2')}`, name: "eclairebyjennie", photo: `${photo2}`,alt: "user photo", text: "eclairebyjennie", description: `${t('feedback.post2')}`, next: `${t('feedback.next')}`, prev:`${t('feedback.prev')}`, link: "https://www.instagram.com/eclairebyjennie/", btn: `${t('feedback.button')}` },
    { id: "3", title: `${t('feedback.title-post3')}`, name: "tetabakeryny", photo: `${photo3}`,alt: "user photo", text: "tetabakeryny", description: `${t('feedback.post3')}`, next: `${t('feedback.next')}`, prev:`${t('feedback.prev')}`, link: "https://www.instagram.com/tetabakeryny/", btn: `${t('feedback.button')}` },
    { id: "4", title: `${t('feedback.title-post4')}`, name: "ama_sweetboutique", photo: `${photo4}`,alt: "user photo", text: "ama_sweetboutique", description: `${t('feedback.post4')}`, next: `${t('feedback.next')}`, prev:`${t('feedback.prev')}`, link: "https://www.instagram.com/amarielledesserts?igsh=MW96MXZvdWJ1YjBy", btn: `${t('feedback.button')}` },
    { id: "5", title: `${t('feedback.title-post5')}`, name: "dreamy__macarons", photo: `${photo5}`,alt: "user photo", text: "dreamy__macarons", description: `${t('feedback.post5')}`, next: `${t('feedback.next')}`, prev:`${t('feedback.prev')}`, link: "https://www.instagram.com/dreamy__macarons/", btn: `${t('feedback.button')}` },
    { id: "6", title: `${t('feedback.title-post6')}`, name: "lareposteria_de_sweetcakes", photo: `${photo6}`, alt: "user photo", text: "lareposteria_de_sweetcakes", description: `${t('feedback.post6')}`, next: `${t('feedback.next')}`, prev: `${t('feedback.prev')}`, link: "https://www.instagram.com/lareposteria_de_sweetcakes/", btn: `${t('feedback.button')}` },
    { id: "7", title: `${t('feedback.title-post7')}`, name: "monam.oour", photo: `${photo7}`,alt: "user photo", text: "monam.oour", description: `${t('feedback.post6')}`, next: `${t('feedback.next')}`, prev:`${t('feedback.prev')}`, link: "https://www.instagram.com/monam.oour/", btn: `${t('feedback.button')}` }
  ]
  return (
    <section className='feedback'>
      <div className="feedback__wrap">
        <div className="container">
         <h2 className="feedback__title">{t('feedback.title')}</h2> 
          <Carusel>
            {postList.map((item) => (
              <li  className="posts__item" key={item.id}>
                <div className="post">
                  <div className="post__wrap">
                    <h3 className="post__title">{ item.title}</h3>
                    <div className="post__user user">
                      <div className="user__wrap">
                        <div className="user__image">
                          <img src={item.photo} alt={postList.alt} className="user__img" />
                        </div>
                          <div className="user__name">{ item.name}</div>
                      </div>
                    </div>
                    <div className="post__description">{item.description}</div>
                    <a href={item.link} className="post__link btn">{item.btn}</a>
                  </div>
                </div>
              </li>
            ))}
          </Carusel>
          </div>
        </div>
    </section>
  );
};
export default Feedback;
