import React, { useState } from 'react';
import './App.css';
import Navigation from './Navigation';

function App() {
  const [czyMenuOtwarte, setCzyMenuOtwarte] = useState(false);

  const zmienMenu = () => {
    setCzyMenuOtwarte(!czyMenuOtwarte);
  };

  const [aktualneZdjecie, ustawAktualneZdjecie] = useState('roza');
  const [cenaKwiatow, ustawCeneKwiatow] = useState(7);

  const zdjecia = ['roza', 'gozdzik', 'tulipany'];
  const iloscZdjec = zdjecia.length;

  const nastepneZdjecie = () => {
    const aktualnyIndex = zdjecia.indexOf(aktualneZdjecie);
    const kolejnyIndex = (aktualnyIndex + 1) % iloscZdjec;
    ustawAktualneZdjecie(zdjecia[kolejnyIndex]);
    aktualizujCeneKwiatow(zdjecia[kolejnyIndex]);
  };

  const poprzednieZdjecie = () => {
    const aktualnyIndex = zdjecia.indexOf(aktualneZdjecie);
    const poprzedniIndex = (aktualnyIndex - 1 + iloscZdjec) % iloscZdjec;
    ustawAktualneZdjecie(zdjecia[poprzedniIndex]);
    aktualizujCeneKwiatow(zdjecia[poprzedniIndex]);
  };

 
  const aktualizujCeneKwiatow = (zdjecie) => {
    switch (zdjecie) {
      case 'roza':
        ustawCeneKwiatow(7);
        break;
      case 'gozdzik':
        ustawCeneKwiatow(5);
        break;
      case 'tulipany':
        ustawCeneKwiatow(8);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Moja Kwiaciarnia</h1>
        <button className="menu-toggle" onClick={zmienMenu}>{czyMenuOtwarte ? 'Zamknij Menu' : 'Otwórz Menu'}</button>
        <Navigation isOpen={czyMenuOtwarte} />
      </header>
      <main>
        <section>
          <h2>Witaj w naszej kwiaciarni!</h2>
          <p>Znajdziesz u nas piękne kwiaty, bukiety i wiele innych!</p>
        </section>
          <section>
          <h2>Oferta</h2>
          <div className="image-wrapper">
            <img src={`/images/${aktualneZdjecie}.jpg`} alt={`Zdjęcie ${aktualneZdjecie}`} />
            <div className="image-description">
              {aktualneZdjecie === 'roza' && <p>Róża: {cenaKwiatow} zł</p>}
              {aktualneZdjecie === 'gozdzik' && <p>Gozdzik: {cenaKwiatow} zł</p>}
              {aktualneZdjecie === 'tulipany' && <p>Tulipany: {cenaKwiatow} zł</p>}
            </div>
            <div className="buttons-wrapper">
              <button className="prev-button" onClick={poprzednieZdjecie}>{'<'}</button>
              <button className="next-button" onClick={nastepneZdjecie}>{'>'}</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Moja Kwiaciarnia</p>
      </footer>
    </div>
  );
}

export default App;
