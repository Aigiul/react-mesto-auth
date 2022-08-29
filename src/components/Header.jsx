import React from 'react';

function Header(src, alt) {
  return (
    <header className='header'>
      <img className='header__logo' src='./images/logo.svg' alt="Логотип сайта Место" />
    </header>
  );
}

export default Header;