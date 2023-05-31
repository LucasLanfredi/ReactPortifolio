import React from 'react';
import { changeLanguage } from 'i18next';

function Header({ greeting, jobTitle, onChangeLanguage }) {

  return (
    <header>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('pt')}>Português</button>
      <p>{greeting}</p>
      <h1>{jobTitle}</h1>
    </header>
  );
}

export default Header;