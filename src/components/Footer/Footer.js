import React from 'react';
import {
  SocialContainer,
  SocialIconsContainer,
  GitBookButton,
  GrowingPlanet,
} from './FooterStyles';
import { Section, SectionTitle, GrowingButton, ButtonFrame } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <Section id='codex'>
      <SectionTitle>Le Codex</SectionTitle>
      <SocialIconsContainer>
        <GitBookButton
          href='https://eclypse-sa.gitbook.io/eclypse-codex/'
          src='/images/gitbook.png'
        />
      </SocialIconsContainer>
      <SocialIconsContainer>
        <ButtonFrame pic='/images/button_container.png'>Retrouve nos réseaux</ButtonFrame>
      </SocialIconsContainer>
      <SocialIconsContainer>
        <SocialContainer>
          <GrowingPlanet href='https://discord.gg/pz769tvgMJ' src='/images/DiscordECL.png' />
          <GrowingPlanet href='https://www.youtube.com/channel/UCYBS4mSRSq29MykFGGjPb0g' src='/images/YoutubeECL.png' />
          <GrowingPlanet href='https://twitter.com/EclypseSA' src='/images/TwitterECL.png' />
          <GrowingPlanet href='https://www.instagram.com/eclypse.sa/' src='/images/InstaECL.png' />
        </SocialContainer>
      </SocialIconsContainer>
    </Section>
  );
};

export default Footer;
