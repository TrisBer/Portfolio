import './NavigationBar.css'; 

const Navigationbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Mon Portfolio</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/home">Accueil</a></li>
        <li><a href="/about">À Propos</a></li>
        <li><a href="/Languages">Languages</a></li>
        <li><a href="/Projets">Projets</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigationbar;