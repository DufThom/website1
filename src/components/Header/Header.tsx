import Link from 'next/link';
import React from 'react';

import {
  Container,
  LogoContainer,
  LinksContainer,
  NavLink,
  Logo,
  FormButton,
  LogoMobile,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <LogoContainer>
      <Link href='/'>
        <Logo src='/images/logo_ecl_blanc.png' />
      </Link>
      <Link href='/'>
        <LogoMobile src='/images/logo_mobile.png' />
      </Link>
    </LogoContainer>
    <LinksContainer>
      <Link href='/#projects'>
        <NavLink>Guilde</NavLink>
      </Link>
      <Link href='/#tech'>
        <NavLink>Mission</NavLink>
      </Link>
      <Link href='/#about'>
        <NavLink>Objectif</NavLink>
      </Link>
      <Link href='/#codex'>
        <NavLink>Codex</NavLink>
      </Link>
      <Link href='/JoinUs'>
        <FormButton pic='/images/form_frame.png' width='250px'>
          Formulaire
          <br />
          d'adhésion
        </FormButton>
      </Link>
    </LinksContainer>
  </Container>
);

export default Header;
