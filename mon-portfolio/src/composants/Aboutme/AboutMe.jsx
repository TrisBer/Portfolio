/* eslint-disable */
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-text">
        <h2>À propos de moi</h2>
        <p>
          Bonjour! Je suis Tristan, un développeur agé de 25ans en plein apprentissage mais avec beaucoup d'ambition. 
          Ayant commencé à me former depuis l'an dernier via OpenClassroom en tant qu'intégrateur web. 
          J'ai pu apprendre à travailler en autonomie et à devoir remettre en quesiton mon travail pour le parfaire. 
          Ce qui m'offre une bonne capacité d'analyse dans ce domaine et des bases solides en dévellopement.
        </p>
      </div>
      <div className="about-me-image">
        <div className='photo-de-moi'><img src='mon-portfolio\src\assets\photo-moi.webp' alt='photo me représentant'/></div>
        <div className="social-links">
          <a href="https://twitter.com/NaruLive_" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/in/tristan-b-385235266/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/TrisBer" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
