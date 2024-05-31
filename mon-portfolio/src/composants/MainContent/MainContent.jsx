import AboutMe from '../Aboutme/AboutMe';
import Projects from '../Projects/Projects';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <AboutMe />
      <Projects />
    </main>
  );
}

export default MainContent;
