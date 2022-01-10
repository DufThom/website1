import React from 'react';

import {
  TimeLineContainer,
  TimeLineBox,
  TimeLineInnerBox,
  TimeLineItemText,
  TimeLineItemTitle,
  Arrow,
} from './TimeLineStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => {
  return (
    <Section id='about'>
      <SectionTitle>Nos Objectifs</SectionTitle>
      <SectionText>
        Construire une communauté de joueur francophone soudé qui saura influencer le cours des
        évènements au sein du métaverse Star Atlas.
      </SectionText>
      <TimeLineContainer>
        {TimeLineData.map((item, index) => (
          <TimeLineBox>
            <TimeLineInnerBox index={index}>
              <TimeLineItemTitle>{item.year}</TimeLineItemTitle>
              <TimeLineItemText>{item.text}</TimeLineItemText>
            </TimeLineInnerBox>
            {!(index == TimeLineData.length - 1) && <Arrow src='/images/timeline/arrow.png' />}
          </TimeLineBox>
        ))}
      </TimeLineContainer>
    </Section>
  );
};

export default Timeline;
