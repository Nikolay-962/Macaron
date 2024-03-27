import React from 'react';
import "./Price.scss";
import { useTranslation } from "react-i18next";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img5 from "./image/inst.jpg";
import img4 from "./image/img4.jpg";

const Price = () => {
  const { t } = useTranslation();
  const [activeList, setActiveList] = React.useState([]);
  const [itemTextList, setItemTextList] = React.useState([]);
  const priseCards = [
    { id: "1", img: `${img1}`, alt: `${t('price.alt1')}`, class: "active", title: `${t('price.title1')}`, cost: `${t('price.cost')}`, price: "$ 120", btn: `${t('price.btn')}`, question: `${t('price.question')}`, text: [`${t('detailsOne.1')}`, `${t('detailsOne.2')}`, `${t('detailsOne.3')}`, `${t('detailsOne.4')}`, `${t('detailsOne.5')}`, `${t('detailsOne.6')}`, `${t('detailsOne.7')}`, `${t('detailsOne.8')}`,] },
    
    { id: "2", img: `${img3}`, alt: `${t('price.alt2')}`, class: "active", title: `${t('price.title2')}`, cost: `${t('price.cost')}`, price: "$ 60", btn: `${t('price.btn')}`, question: `${t('price.question')}`, text: [`${t('detailsTwo.1')}`, `${t('detailsTwo.2')}`, `${t('detailsTwo.3')}`, `${t('detailsTwo.4')}`, `${t('detailsTwo.5')}`,] },
    
    { id: "3", img: `${img2}`, alt: `${t('price.alt3')}`, class: "active", title: `${t('price.title3')}`, cost: `${t('price.cost')}`, price: "$ 60", btn: `${t('price.btn')}`, question: `${t('price.question')}`, text: [`${t('detailsThree.1')}`, `${t('detailsThree.2')}`, `${t('detailsThree.3')}`, `${t('detailsThree.4')}`, `${t('detailsThree.5')}`, `${t('detailsThree.6')}`, `${t('detailsThree.7')}`, `${t('detailsThree.8')}`, `${t('detailsThree.9')}`, `${t('detailsThree.10')}`, `${t('detailsThree.11')}`, `${t('detailsThree.12')}`, `${t('detailsThree.13')}`, `${t('detailsThree.14')}`, `${t('detailsThree.15')}`, `${t('detailsThree.16')}`, `${t('detailsThree.17')}`, `${t('detailsThree.18')}`, `${t('detailsThree.19')}`, `${t('detailsThree.20')}`, `${t('detailsThree.21')}`, `${t('detailsThree.22')}`, `${t('detailsThree.23')}`, `${t('detailsThree.24')}`] },
    
    { id: "4", img: `${img5}`, alt: `${t('price.alt4')}`, class: "active", title: `${t('price.title4')}`, cost: `${t('price.cost')}`, price: "$ 50", btn: `${t('price.btn')}`, question: `${t('price.question')}`, text: [`${t('detailsFour.1')}`, `${t('detailsFour.2')}`, `${t('detailsFour.3')}`] },
    
    { id: "5", img: `${img4}`, alt: `${t('price.alt5')}`, class: "active", title: `${t('price.title5')}`, cost: `${t('price.cost')}`, price: "$ 130", btn: `${t('price.btn')}`, question: `${t('price.question')}`, text: [`${t('detailsFive.1')}`, `${t('detailsFive.2')}`, `${t('detailsFive.3')}`] }
   
  ]
  const toggleItem = (itemId, itemText) => {
    itemText = priseCards[itemId -1].text;
    setItemTextList(itemText);   
    if (activeList.includes(itemId)) {
      setActiveList(activeList.filter((id) => id !== itemId));
    } else {
      setActiveList([...activeList, itemId]);
    }
  };
  return (
    <section className='price-cards'>
      <div className="price-cards__wrap">
        <div className="container">
          <div className="price-cards__title">
          <h2 className="title-two">{t('price.title-big')}</h2>
          </div>
          <div className="price">
            <ul className="price__list">
              {priseCards.map((item) => (<li key={item.id}  className="price__item p-card">
                <div className="p-card__body">
                  <div className="p-card__wrap">
                  <div className="p-card__picture p-picture">
                    <div className="p-picture__cover">
                      <img src={item.img} alt={item.alt} className="p-picture__img"  />
                    </div>
                  </div>
                    <div className="p-card__costs costs">
                      <div className="costs__wrap">
                        <h3 className="costs__title title3">{item.title}</h3>
                        <div className="costs__text">{ item.cost}</div>
                    <div className="costs__price">{item.price}</div>
                        <button className='costs__btn btn btn--costs' >{item.btn}</button>
                      </div>
                      </div>
                    </div>
                  <div className="p-card__details details">
                  <button onClick={() => toggleItem(item.id)} className={`details__title ${activeList.includes(item.id)  ? "details__title--open": ""}`} >{t('price.question')}</button>
                    {activeList.includes(item.id) && (
                      <ul className="details__list" >
                        {itemTextList.map((el) => (
                          <li key={el.toString()} className="details__item">
                            {el}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Price;
