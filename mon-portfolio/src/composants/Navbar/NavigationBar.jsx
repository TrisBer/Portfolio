import './NavigationBar.css'; 

const Navigationbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MonSite</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/home">Accueil</a></li>
        <li><a href="/about">À Propos</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigationbar;
