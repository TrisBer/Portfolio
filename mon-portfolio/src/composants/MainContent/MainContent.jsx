import AboutMe from '../Aboutme/AboutMe';
import Languages from '../Languages/Languages';
import Projects from '../Projects/Projects';

import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <AboutMe />
      <Languages />
      <Projects />
    </main>
  );
}

export default MainContent;
