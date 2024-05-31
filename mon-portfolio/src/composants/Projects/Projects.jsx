import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: "Projet 1", description: "Description du projet 1..." },
    { id: 2, title: "Projet 2", description: "Description du projet 2..." },
    { id: 3, title: "Projet 3", description: "Description du projet 3..." },
    { id: 4, title: "Projet 4", description: "Description du projet 4..." },
    { id: 5, title: "Projet 5", description: "Description du projet 5..." },
    { id: 6, title: "Projet 6", description: "Description du projet 6..." },
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
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
