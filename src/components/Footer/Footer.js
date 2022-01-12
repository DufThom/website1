import React from 'react';
import Link from 'next/link';

import {
  SocialContainer,
  SocialIconsContainer,
  GitBookButton,
  GrowingPlanet,
} from './FooterStyles';
import { Section, SectionTitle, ButtonFrame } from '../../styles/GlobalComponents';

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
        <ButtonFrame pic='/images/button_container.png'>Nos reseaux</ButtonFrame>
      </SocialIconsContainer>
      <SocialIconsContainer>
        <SocialContainer>
          <Link href='https://discord.gg/pz769tvgMJ'>
            <GrowingPlanet src='/images/DiscordECL.png' />
          </Link>
          <Link href='https://www.youtube.com/channel/UCYBS4mSRSq29MykFGGjPb0g'>
            <GrowingPlanet src='/images/YoutubeECL.png' />
          </Link>
          <Link href='https://twitter.com/EclypseSA'>
            {/* <GrowingPlanet href='https://telegram.com' src='/images/TelegramECL.png' /> */}
            <GrowingPlanet src='/images/TwitterECL.png' />
          </Link>
          <Link href='https://www.instagram.com/eclypse.sa/'>
            <GrowingPlanet src='/images/InstaECL.png' />
          </Link>
        </SocialContainer>
      </SocialIconsContainer>
    </Section>
  );
};

export default Footer;
