import React from 'react'
import logo from '../images/logo.svg';

function Header () {
  return (
    <header className="header">
      <img class="header__logo" src={logo} alt='логотип Mesto'></img>
    </header>
  );
}
export default Header;