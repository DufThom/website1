import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillTwitterCircle, AiFillMediumCircle } from 'react-icons/ai';
import { SiEclipseide } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <SiEclipseide size="3rem" /> <span> Eclypse</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>News</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Mission</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Objectifs</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://twitter.com">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://medium.com">
          <AiFillMediumCircle size="3rem"/>
        </SocialIcons>   
        {/* <SocialIcons href="https://discord.gg/pz769tvgMJ">
          <FaDiscord size="3rem"/>
        </SocialIcons>       */}
      </Div3>
    </Container>
);

export default Header;
