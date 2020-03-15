import React from 'react';
import Navigation from './../../components/Navigation/Navigation';
import Sidebar from './../../components/Sidebar/Sidebar';

const ContactView = () => (
  <div className="wrapper contact-wrapper">
    <Navigation />
    <Sidebar />
    <div className="contact-content">
      <h1> Kontakt </h1>{' '}
      <h2>
        Jestem dostępny dla firm, agencji kreatywnych <br />
        oraz osób prywatnych{' '}
      </h2>{' '}
      <h3>
        Zlecenia wyceniam jako fixed - price dla jasno sprecyzowanych projektów
        lub jako stawka godzinowa dla zleceń o zmieniających się założeniach.{' '}
      </h3>{' '}
      <h4>
        <a href="mailto:info@j-filipiak.pl?subject=dot.współpracy">
          Napisz do mnie!
        </a>{' '}
        <a href="tel:663568828"> lub zadzwoń: 663 56 88 28 </a>{' '}
      </h4>{' '}
      <ul>
        <li>
          {' '}
          Większe projekty dziele na etapy z rozliczeniem 2 x w miesiącu{' '}
        </li>{' '}
        <li>
          Stawka godzinowa uzależniona jest od umiejętności które są wymagane do
          ukończenia projektu i wacha się w granicach 50 - 100 zł netto / h{' '}
        </li>{' '}
        <li>
          Do wszystkich projektów graficznych przekazuje prawa autorskie oraz
          przesyłam pliki otwarte{' '}
        </li>{' '}
      </ul>{' '}
    </div>{' '}
  </div>
);

export default ContactView;
