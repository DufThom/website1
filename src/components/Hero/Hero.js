import React from 'react';

import { Section, SectionText, SectionTitle, GrowingButton } from '../../styles/GlobalComponents';
import { VideoSection, Overlay } from './HeroStyles';
import '../../styles/globals';

const Hero = () => {
  return (
    <>
      <VideoSection className='heroVideo'>
        <Overlay />
        <iframe
          src='https://www.youtube.com/embed/ciFSSd39pAY?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=&playlist=ciFSSd39pAY'
          title='Eclypse'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        />
      </VideoSection>
      <Section id='guilde'>
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
    </>
  );
};

export default Hero;
