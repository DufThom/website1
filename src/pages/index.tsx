import Acomplishments from '../components/Acomplishments/Acomplishments';
// import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Missions from '../components/Missions/Missions';
import Timeline from '../components/TimeLine/TimeLine';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Carrousel from '../components/Carrousel';

const Home = () => {
  return (
    <Layout>
      <Carrousel />
      <Section>
        <Hero />
        {/* <BgAnimation /> */}
      </Section>
      <Acomplishments />
      <Projects />
      <Missions />
      <Timeline />
      <Technologies />
    </Layout>
  );
};

export default Home;
