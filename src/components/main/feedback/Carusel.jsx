

import { useEffect, useState, Children, cloneElement } from 'react';
import { useTranslation } from "react-i18next";
import "./Carusel.scss";

const PAGE_WIDTH = 900;

const Carusel = ({ children }) => {
  const { t } = useTranslation();
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handlerNext = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      //console.log("left")
      return Math.min(newOffset, 0);
    })
  }
  const handlerPrev = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = PAGE_WIDTH * -(pages.length - 1)
      //console.log("right")
      return Math.max(newOffset, maxOffset);
    })
  }


  useEffect(() => {
    setPages(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            hight: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          }
        })
      })
    )
  }, [])
 
  return (
    <div className="posts">
    <button onClick={handlerNext} className={`posts__btn ${offset ? "posts__btn--active" : ""}`}>{t('feedback.next')}</button>
    <div className='posts__wrap main-container'>
      <ul className="posts__list window">
        <div className="all-pages-container" style={{transform: `translateX(${offset}px)`}}>{ pages}</div>
      </ul>
      </div>
      <button onClick={handlerPrev} className={`posts__btn ${offset ? "" : "posts__btn--active"}`}>{t('feedback.prev')}</button>
      </div>
  );
};

export default Carusel;
