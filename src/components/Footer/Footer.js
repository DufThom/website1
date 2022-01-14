import React from 'react';
import Link from 'next/link';

import {
  SocialContainer,
  SocialIconsContainer,
  SocialTitleContainer,
  PapersContainer,
  GitBookButton,
  GrowingPlanet,
  PlanetLink,
} from './FooterStyles';
import { Section, SectionTitle, ButtonFrame } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <Section id='codex'>
      <SectionTitle>Le Codex</SectionTitle>
      <PapersContainer>
        <a href='https://eclypse-sa.gitbook.io/eclypse-codex/' target='_blank'>
          <GitBookButton src='/images/gitbook.png' />
        </a>
      </PapersContainer>
      <SocialTitleContainer>
        <ButtonFrame pic='/images/button_container.png'>Nos reseaux</ButtonFrame>
      </SocialTitleContainer>
      <SocialIconsContainer>
        <SocialContainer>
          <PlanetLink href='https://discord.gg/pz769tvgMJ' target='_blank'>
            <GrowingPlanet src='/images/DiscordECL.png' />
          </PlanetLink>
          <PlanetLink
            href='https://www.youtube.com/channel/UCYBS4mSRSq29MykFGGjPb0g'
            target='_blank'
          >
            <GrowingPlanet src='/images/YoutubeECL.png' />
          </PlanetLink>
          <PlanetLink href='https://twitter.com/EclypseSA' target='_blank'>
            {/* <GrowingPlanet href='https://telegram.com' src='/images/TelegramECL.png' /> */}
            <GrowingPlanet src='/images/TwitterECL.png' />
          </PlanetLink>
          <PlanetLink href='https://www.instagram.com/eclypse.sa/' target='_blank'>
            <GrowingPlanet src='/images/InstaECL.png' />
          </PlanetLink>
        </SocialContainer>
      </SocialIconsContainer>
    </Section>
  );
};

export default Footer;
