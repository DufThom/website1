import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Hero />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
