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
				użytkownika.
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
					Tworze projekty typu motion design z wykorzystaniem after effects oraz
					także cinema 4d
				</li>
				<li>
					<strong>Adobe indesign</strong> - chętnie przygotuje ofertówke firmy w
					PSF-ie , zdarzało mi się takze robić różnego typu druczki bankowe ,
					kalendarze itp{' '}
				</li>
				<li>
					<strong>Adobe Xd</strong> Dla tego programu porzuciłem Sketch-a ,
					nowoczesne projektowanie interfejsów tylko i wyłącznie z Adobe XD
				</li>
				<li>
					<strong>Adobe Photoshop</strong> zaczynałem od wersji 7.0 ponad 10 lat
					temu , nie mniej nadal wykupuje kursy dotyczące tego programu{' '}
				</li>
				<li>
					<strong>Adobe Illustrator</strong> Wykorzystuje ten program w
					nowoczesnym projektowaniu elementów do wykorzystania w internecie ,
					posiadam własny workflow z wykorzystaniem grafiki svg w połączeniu z
					After Effects/Bodymovin dzięki czemu z sposób zaawansowany animuje
					elementy svg na stronach internetowych{' '}
				</li>
			</ul>

			<ul>
				<li>
					<span className="skills-heading">Front-End:</span>
				</li>
				<li>
					<strong>HTML / CSS/ SASS</strong> - Każdy projekt kompiluje w Sass,
					posiadam własny Sass-owy workflow dzięki czemu webdevelopment jest
					przyjemny a kod bardzo mocno zrefaktoryzowany{' '}
				</li>
				<li>
					<strong>Wordpress</strong> - Bardzo dobra znajomośc Wordpressa ,
					umiejętność kodowania PSD -&gt; WP z wykorzystaniem
					Underscore/Understrap + ACF , znajomośc haków /filtrów / wp codexu
					oraz.. stackoverflow
				</li>
				<li>
					<strong>JavaScript</strong> Aktualnie caly czas rozwijam się w
					JavaScript , ta strona została napisana początkowo jako static HTML
					aczkolwiek aktualnie jest ona budowana za pomocą biblioteki React.js
				</li>
				<li>
					<strong>Webpack, Gulp ,Grunt</strong> korzystam przy większych
					projektach
				</li>
			</ul>
		</div>
	</div>
);

export default AboutMeView;
