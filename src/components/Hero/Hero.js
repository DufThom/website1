import React from 'react';

import { Section, SectionText, SectionTitle, GrowingButton } from '../../styles/GlobalComponents';
import { VideoSection } from './HeroStyles';
import '../../styles/globals';

const Hero = () => {
  return (
    <>
      <VideoSection className='heroVideo' id='guilde'>
        <iframe
          src='https://www.youtube.com/embed/ciFSSd39pAY?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=&playlist=ciFSSd39pAY'
          title='Eclypse'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        />
      </VideoSection>
      <Section>
        <SectionTitle main center>
          La Guilde Francophone de Star Atlas !
        </SectionTitle>
        <SectionText>
        Eclypse est une communauté de joueurs en quête d’exploration spatiale. 
Certain(e)s, très expérimenté(e)s, proviennent de 4X, comme Eve Online… ou sont des investisseurs de tous niveaux.
Notre volonté, est de faire rayonner la francophonie à travers les métavers.
Notre point de départ : Star Atlas !

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
