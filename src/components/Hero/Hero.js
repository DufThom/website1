import React from 'react';

import { Section,SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section nopadding>
        <img src='/images/DividerECL.png'  />
        <SectionTitle main center>
          La Guilde Francophone<br />
          de Star Atlas !
        </SectionTitle>
        <SectionText>
        Nos membres sont la synthèse (symbiose) de joueurs expérimentés 4X comme Eve online et d'investisseurs de tout niveau qui souhaitent faire 
        briller la francophonie à travers l'univers des métaverses et particulièrement sur Star Atlas.
        </SectionText>
        <Button onClick={() => window.location = 'https://discord.gg/pz769tvgMJ'}>Rejoins le Discord !</Button>
      
    </Section>
  </>
);

export default Hero;