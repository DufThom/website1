import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '>150', text: 'Nombre de membres'},
  { number: '>100000 $', text: 'Valeurs des assets in game', },
  { number: '>100', text: 'Twitter Followers', },
  { number: '>50', text: 'Medium followers', }
];

const Acomplishments = () => (
  <Section>
    <img src='/images/stats.png' width="100%" height="auto" margin="15"/>

    {/* <SectionTitle>Stats de la Guilde</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> */}


  </Section>
);

export default Acomplishments;
