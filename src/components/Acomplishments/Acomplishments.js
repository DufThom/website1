import React from 'react';

import { Section } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, InnerBox } from './AcomplishmentsStyles';

import { AccompData } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <Boxes>
      {AccompData.map((card, index) => (
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
