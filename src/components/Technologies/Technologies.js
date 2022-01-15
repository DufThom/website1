import React from 'react';
import { CgGames } from 'react-icons/cg';
import { FaBitcoin } from 'react-icons/fa';
import { GiHumanPyramid } from 'react-icons/gi';

import { Divider, Section } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import { TechnologiesData } from '../../constants/constants';

const Technologies = () => (
  <Section>
    <List>
      {TechnologiesData.map((item, index) => (
        <ListItem key={index}>
          <picture>
            {item.title == 'Gaming' && <CgGames size='4rem' />}
            {item.title == 'Crypto' && <FaBitcoin size='4rem' />}
            {item.title == 'Valeurs' && <GiHumanPyramid size='4rem' />}
          </picture>
          <ListContainer>
            <ListTitle>{item.title}</ListTitle>
            <ListParagraph>{item.text}</ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    
  </Section>
);

export default Technologies;
