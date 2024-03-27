import React from 'react';
import logo from "./../image/logo5.jpg"
import "./Logo.scss"

const Logo = () => {
  return (
    <div className='logo'>
      <a href="https://www.instagram.com/macaron_by_elena" className="logo__link">
      <div className="logo__wrap">
        
          <div className="logo__image image">
            <div className="image__cover">
              <img src={logo} alt="Фото автора курса" className="image__img" />
              </div>
          </div>
        <div className="logo__text">My Instagram</div>
        </div>
        </a>
    </div>
  );
};
export default Logo;