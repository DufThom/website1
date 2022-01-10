import React from 'react';

import { Section } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, InnerBox } from './AcomplishmentsStyles';

const data = [
  {
    number: '>1000000$',
    text: 'Valeur des assets',
    image: '/images/accomp/top-left.png',
    align: 'end',
  },
  {
    number: '>35%',
    text: 'Actifs par jour',
    image: '/images/accomp/top-right.png',
    align: 'start',
  },
  {
    number: '>24h/7',
    text: 'Multi timezone',
    image: '/images/accomp/mid-left.png',
    align: 'end',
  },
  {
    number: '>50',
    text: 'Medium followers',
    image: '/images/accomp/mid-right.png',
    align: 'start',
  },
  {
    number: '>5',
    text: "Continents d'activité",
    image: '/images/accomp/bot-left.png',
    align: 'end',
  },
  {
    number: '>Multi',
    text: 'Compétences',
    image: '/images/accomp/bot-right.png',
    align: 'start',
  },
];

const Acomplishments = () => (
  <Section>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} className={`box-${index + 1}`}>
          <InnerBox image={card.image} align={card.align}>
            <BoxNum align={card.align}>{`${card.number}`}</BoxNum>
            <BoxText align={card.align}>{card.text}</BoxText>
          </InnerBox>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
