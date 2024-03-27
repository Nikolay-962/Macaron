import React from 'react';
import Logo from './logo/Logo';
import Langeuage from './language/Langeuage';
import "./Header.scss"

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header__wrap">
        <Logo />
        <Langeuage/>
        </div>
      </div>
    </div>
  );
};
export default Header;