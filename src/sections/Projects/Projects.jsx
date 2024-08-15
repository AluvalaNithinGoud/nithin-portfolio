import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import gpt3png from '../../assets/gpt3png.jpeg';
import WeatherUI  from '../../assets/WeatherUI.jpeg';

import ProjectCard from '../../common/ProjectCard';
// import Dimage from './public/dimage.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gpt3png}
          link="https://chat-gpt-ui-nithin.digitalrow.in/"
          h3="GPT-3"
          p="Fully Responsive Modern UI/UX GPT3 Clone"
        />
        <ProjectCard
          src={WeatherUI}
          link="http://weather-dashboard-nithin.digitalrow.in/"
          h3="Weather Dashboard"
          p="Weather Dashboard"
        />
        {/*<ProjectCard
          src='public/Weather forecast UI interface design.jpeg'
          link="http://weather-dashboard-nithin.digitalrow.in/"
          h3=""
          p="A large NFT Marketplace"
        /> */}
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
