import React from 'react';

const Navigation = ({ isOpen }) => {
  return (
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="/">Strona główna</a></li>
        <li><a href="/produkty">Produkty</a></li>
        <li><a href="/o-nas">O nas</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;