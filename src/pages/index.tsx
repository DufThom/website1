import Acomplishments from '../components/Acomplishments/Acomplishments';
import Projects from '../components/Projects/Projects';
import Missions from '../components/Missions/Missions';
import Timeline from '../components/TimeLine/TimeLine';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Acomplishments />
      <Projects />
      <Missions />
      <Technologies />
      <Timeline />
      
    </Layout>
  );
};

export default Home;
