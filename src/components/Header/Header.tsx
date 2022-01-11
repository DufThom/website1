import Link from 'next/link';
import React from 'react';
import { Container, Div1, Div2, Div3, NavLink } from './HeaderStyles';

const Header = () => (
  <Container >
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <img src='/images/logo_ecl_blanc.png' width="200" height="auto" /> 
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='/#guilde'>
          <NavLink>Guilde</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/#missions'>
          <NavLink>Mission</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/#objectifs'>
          <NavLink>Objectif</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/#codex'>
          <NavLink>Codex</NavLink>
        </Link>
      </li>
      <li></li>
      <li>
        <Link href='/JoinUs'>
          <NavLink>Nous Rejoindre</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
