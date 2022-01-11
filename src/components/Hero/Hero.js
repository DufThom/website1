import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
  GrowingButton,
  Divider,
} from '../../styles/GlobalComponents';

const Hero = () => (
  <Section id='guilde'>
    <Divider src='/images/DividerECL.png' />
    <SectionTitle main center>
      La Guilde Francophone de Star Atlas !
    </SectionTitle>
    <SectionText>
      Nos membres sont la synthèse (symbiose) de joueurs expérimentés 4X comme Eve online et
      d'investisseurs de tout niveau qui souhaitent faire briller la francophonie à travers
      l'univers des métaverses et particulièrement sur Star Atlas.
    </SectionText>
    <GrowingButton
      href='https://discord.gg/pz769tvgMJ'
      pic='/images/button_container.png'
      width='250px'
    >
      Rejoins la faction !
    </GrowingButton>
  </Section>
);

export default Hero;
