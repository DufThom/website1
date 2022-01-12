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
    <Section>
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
          <GrowingPlanet href='https://youtube.com' src='/images/YoutubeECL.png' />
          {/* <GrowingPlanet href='https://telegram.com' src='/images/TelegramECL.png' /> */}
          <GrowingPlanet href='https://twitter.com' src='/images/TwitterECL.png' />
          <GrowingPlanet href='https://instagram.com' src='/images/InstaECL.png' />
        </SocialContainer>
      </SocialIconsContainer>
    </Section>
  );
};

export default Footer;
