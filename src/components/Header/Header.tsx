import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillTwitterCircle, AiFillMediumCircle } from 'react-icons/ai';
import { SiEclipseide } from 'react-icons/si';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <img src='/images/logo_ecl_blanc.png' width="200" height="auto" /> 
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='/#projects'>
          <NavLink>Guilde</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/#tech'>
          <NavLink>Mission</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/#about'>
          <NavLink>Objectif</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/JoinUs'>
          <NavLink>Codex</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
