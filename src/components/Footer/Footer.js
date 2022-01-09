import React from 'react';
import { SocialIcons } from '../Header/HeaderStyles';
import {  FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <Section >
      <SectionTitle>
        Le Codex
      </SectionTitle>
      <SocialIconsContainer>
      <SocialIcons href="https://eclypse-sa.gitbook.io/eclypse-codex/" >
            <img src='/images/gitbook.png'  />
      </SocialIcons>
      </SocialIconsContainer>
      <img src='/images/rejoins_la_faction.png'  />
      <SocialIconsContainer>
      
        <SocialContainer>
          <SocialIcons href="https://discord.gg/pz769tvgMJ">
            <img src='/images/DiscordECL.png' width="250" height="auto" />
          </SocialIcons>
          <SocialIcons href="https://youtube.com">
            <img src='/images/YoutubeECL.png' width="200" height="auto" />
          </SocialIcons>
          <SocialIcons href="https://telegram.com">
            <img src='/images/TelegramECL.png' width="200" height="auto" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com">
            <img src='/images/TwitterECL.png' width="200" height="auto"  />
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <img src='/images/InstaECL.png' width="200" height="auto"  />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </Section>
  );
};

export default Footer;
