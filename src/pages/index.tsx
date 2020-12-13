import HomeTemplate from '~templates/HomeTemplate';
import AboutTemplate from '~templates/AboutTemplate';
import SkillsTemplate from '~templates/SkillsTemplate';
import ProjectsTemplate from '~templates/ProjectsTemplate';
import FutureTemplate from '~templates/FutureTemplate';
import ContactTemplate from '~templates/ContactTemplate';
import Footer from '~organisms/Footer';

const App = () => {
  return (
    <>
      <HomeTemplate />
      <AboutTemplate />
      <SkillsTemplate />
      <ProjectsTemplate />
      <FutureTemplate />
      <ContactTemplate />
      <Footer />
    </>
  );
};

export default App;
