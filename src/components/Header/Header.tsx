import Link from 'next/link';
import React from 'react';

import { slide as Menu } from 'react-burger-menu';
import { CgChevronRight } from 'react-icons/cg';

import {
  Container,
  LogoContainer,
  LinksContainer,
  NavLink,
  Logo,
  FormButton,
  LogoMobile,
  MenuLinksContainer,
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
      <Link href='/JoinUs#start'>
        <FormButton pic='/images/form_frame.png' width='250px'>
          Litepaper
        </FormButton>
      </Link>
      <Link href='/JoinUs#start'>
        <FormButton pic='/images/form_frame.png' width='250px'>
          Postuler
        </FormButton>
      </Link>
    </LinksContainer>
    <Menu right width={250} noOverlay>
      <MenuLinksContainer>
        <Link href='/#guilde'>
          <NavLink>
            <CgChevronRight size='3rem' /> Guilde
          </NavLink>
        </Link>
        <Link href='/#missions'>
          <NavLink>
            <CgChevronRight size='3rem' /> Mission
          </NavLink>
        </Link>
        <Link href='/#objectifs'>
          <NavLink>
            <CgChevronRight size='3rem' /> Objectif
          </NavLink>
        </Link>
        <Link href='/#codex'>
          <NavLink>
            <CgChevronRight size='3rem' /> Codex
          </NavLink>
        </Link>
      </MenuLinksContainer>
    </Menu>
  </Container>
);

export default Header;
