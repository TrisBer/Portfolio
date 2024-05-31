/* eslint-disable react/no-unescaped-entities */
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MonSite. Tous droits réservés.</p>
        <ul className="footer-links">
          <li><a href="/privacy">Politique de confidentialité</a></li>
          <li><a href="/terms">Conditions d'utilisation</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
