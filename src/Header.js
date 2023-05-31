import React from 'react';

function Header({ greeting, jobTitle }) {
  return (
    <header>
      <p>{greeting}</p>
      <h1>{jobTitle}</h1>
    </header>
  );
}

export default Header;