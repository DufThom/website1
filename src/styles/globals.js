import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: center / cover fixed url('/images/background.jpg');
    // background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

.heroVideo iframe {
  width: 100%;
  height: 100%;
}


/* BURGER MENU STYLE */

/* Position and sizing of burger button */
.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  right: 3rem;
  top: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    right:2rem;
    top: 2rem;
  }
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: rgba(255, 255, 255, 0.75);
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: white;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 48px;
  width: 48px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: rgba(255, 255, 255, 0.75);
}

/*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
.bm-menu-wrap {
  position: fixed;
  top:0;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: ${(props) => props.theme.colors.background2};
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}


`;
export default GlobalStyles;
