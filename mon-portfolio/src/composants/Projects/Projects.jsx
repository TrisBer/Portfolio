import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: "Booki", description: "Dans ce projet, vous créerez la page d'accueil d'une agence de voyage en utilisant HTML et CSS. Votre mission principale sera d'intégrer l'interface responsive de leur site.", link: "https://github.com/TrisBer/P3-Booking" },
    { id: 2, title: "Oh my food", description: "Ce projet vous amène à travailler sur l'interface mobile-first du site d’une start-up. Vous utiliserez Sass, implémenterez des animations CSS et versionnerez votre projet avec Git et GitHub.", link: "https://github.com/TrisBer/P4-OhMyFood" },
    { id: 3, title: "Sophie Bluel", description: "Ce projet vous engage à créer une page web dynamique pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API.", link: "https://github.com/TrisBer/P6-SophieBluel" },
    { id: 4, title: "Kasa", description: "Dans ce projet, vous allez implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.", link: "https://github.com/TrisBer/Kasa" },
    { id: 5, title: "Nina Durci", description: "Dans ce projet, vous travaillerez en tant que développeur freelance pour optimiser le référencement d’un site, en améliorant sa performance et son accessibilité.", link: "https://github.com/TrisBer/Projet_9_ninacarducci" },
    { id: 6, title: "Argent Bank", description: "Dans ce projet, vous travaillerez sur le développement front-end d’une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive.", link: "https://github.com/TrisBer/ArgentBank-Re" },
    // Ajoutez plus de projets si nécessaire
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="projects">
      <h2>Mes Projets Précédents</h2>
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.id}>
            <div className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
