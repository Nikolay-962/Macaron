import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../../hooks/use-localstorage';
//import { HiGlobeAlt } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import "./Language.scss"


const Langeuage = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setOpeh] = useState();
  const [language, setLanguage] = useLocalStorage('language', 'ru')
  
  const handleLanguageChangeRu = () => {
      i18n.changeLanguage('ru');
      setLanguage('ru')
  };
  const handleLanguageChangeEn = () => {
    i18n.changeLanguage('en');
    setLanguage('en')
  };
  const handleLanguageChangeSp = () => {
    i18n.changeLanguage('sp');
    setLanguage('sp')
  };
/*
  const handleLanguageChange = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru')
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en')
    }
  };*/
  return (
    <div>
     <div className="languages"> 
        <div  className="language__wrap">          
          <button onClick={()=> setOpeh(!isOpen)} className="language__btn">
            <TfiWorld size='1.4rem' color='#698596' />	
          </button>
          <div className="language__span">{t("header.language") }</div>
          <ul onClick={() => setOpeh(!isOpen) } className={`language__list ${isOpen ? "active" : ""}`} >
            <li onClick={() => handleLanguageChangeEn('en') } className="language__item">En</li>
            <li onClick={() => handleLanguageChangeRu('ru')} className="language__item">Ru</li>
            <li onClick={() => handleLanguageChangeSp('sp')} className="language__item">Sp</li>
         </ul>
        </div>  
      </div>   
    </div>
  );
};
export default Langeuage;