import React from 'react';
import Navigation from './../../components/Navigation/Navigation';
import Sidebar from './../../components/Sidebar/Sidebar';
import jfImage1 from './../../assets/img/about-me.jpg';

const AboutMeView = () => (
  <div className="wrapper about-wrapper">
    <Navigation />
    <Sidebar />
    <div className="about-content">
      <h5>Witam bardzo serdecznie</h5>
      <h1> Jarosław Filipiak ,designer &amp; front-end developer</h1>
      <img src={jfImage1} alt="Jarosław Filipiak" />
      <h2>
        Specjalizuje się w projektowaniu oraz wdrażaniu stron internetowych
        opartych o system Wordpress a także projektowaniem interfejsów
        użytkownika. Aktualnie największy nacisk kłade na drogę React.js
        Developera
      </h2>
      <h3>
        Zajmuje się tym na codzień jako freelancer, pracuje na Macu oraz na
        Windowsie. Posiadam solidny zestaw umiejętności <br></br>i technologii
        związanych z całą otoczką procesu projektowania:
      </h3>
      <ul>
        <li>
          <span className="skills-heading">Projektowanie:</span>
        </li>

        <li>
          <strong>Adobe Xd</strong> Dla tego programu porzuciłem Sketch-a ,
          nowoczesne projektowanie interfejsów tylko i wyłącznie z Adobe XD.
          Coraz częściej przyglądam się Figmie
        </li>
        <li>
          <strong>Adobe Photoshop</strong> zaczynałem od wersji 7.0 ponad 10
          lattemu , nie mniej nadal wykupuje kursy dotyczące tego programu
        </li>
      </ul>

      <ul>
        <li>
          <span className="skills-heading">Front-End:</span>
        </li>
        <li>
          <strong>HTML / CSS/ SASS</strong> - Każdy projekt kompiluje w Sass,
          posiadam własny Sass-owy workflow dzięki czemu webdevelopment jest
          przyjemny a kod bardzo mocno zrefaktoryzowany. Zawsze korzystam z
          webpacka
        </li>
        <li>
          <strong>Wordpress</strong> - Bardzo dobra znajomośc Wordpressa ,
          umiejętność kodowania PSD -&gt; WP z wykorzystaniem
          Underscore/Understrap + ACF , znajomośc haków /filtrów / wp codexu
          oraz.. stackoverflow.Ta strona także wykorzystuje wordpress jako
          backend poprzez REST-API
        </li>
        <li>
          <strong>JavaScript</strong> Aktualnie caly czas rozwijam się w
          kierunku React.js Developera a to jest moj pierwszy Reactowy projekt
        </li>
      </ul>
    </div>
  </div>
);

export default AboutMeView;
