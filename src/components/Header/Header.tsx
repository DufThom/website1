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
  FullMenuLinksContainer,
  BurgerMenuContainer,
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
      <FullMenuLinksContainer>
        <Link href='/#guilde'>
          <NavLink>Guilde</NavLink>
        </Link>
        <Link href='/#missions'>
          <NavLink>Mission</NavLink>
        </Link>
        <Link href='/#objectifs'>
          <NavLink>Objectif</NavLink>
        </Link>
        <Link href='/#codex'>
          <NavLink>Codex</NavLink>
        </Link>
      </FullMenuLinksContainer>
      <a href='https://eclypse-sa.gitbook.io/eclypse-litepaper/' target='_blank'>
        <FormButton pic='/images/form_frame.png' width='250px'>
          Litepaper
        </FormButton>
      </a>
      <Link href='/JoinUs#start'>
        <FormButton pic='/images/form_frame.png' width='250px'>
          Postuler
        </FormButton>
      </Link>
    </LinksContainer>
    <BurgerMenuContainer>
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
    </BurgerMenuContainer>
  </Container>
);

export default Header;
