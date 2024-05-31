/* eslint-disable */
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-text">
        <h2>À propos de moi</h2>
        <p>
          Bonjour! Je suis [Votre Nom], un développeur web passionné par la création de sites et d'applications web interactives et intuitives. Avec plusieurs années d'expérience dans le domaine, j'ai travaillé sur divers projets qui m'ont permis d'affiner mes compétences et d'acquérir une expertise approfondie.
        </p>
      </div>
      <div className="about-me-image">
        <img src="[URL de votre image]" alt="Votre Nom" />
        <div className="social-links">
          <a href="https://twitter.com/votreprofil" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
