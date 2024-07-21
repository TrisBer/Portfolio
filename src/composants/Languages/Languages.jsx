import './Languages.css';

// Importer les images
import javascriptLogo from '../../images/javascript.png';
import reactLogo from '../../images/react.png';
import html_5 from '../../images/html-5.png';
import css_3 from '../../images/css-3.png';
import nodejsLogo from '../../images/nodejs.png';
import sass from '../../images/sass.png';

const Languages = () => {
  const languages = [
    { id: 1, name: 'JavaScript', imgSrc: javascriptLogo },
    { id: 2, name: 'React', imgSrc: reactLogo },
    { id: 3, name: 'Html-5', imgSrc: html_5 },
    { id: 4, name: 'Css-3', imgSrc: css_3 },
    { id: 5, name: 'Node.js', imgSrc: nodejsLogo },
    { id: 6, name: 'sass', imgSrc: sass },
  ];

  return (
    <section className="languages">
      <h2>Langages de Programmation</h2>
      <div className="language-list">
        {languages.map(language => (
          <div key={language.id} className="language-item">
            <img src={language.imgSrc} alt={language.name} className="language-logo" />
            <h3>{language.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;
