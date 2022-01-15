import React from 'react';

import {
  TimeLineContainer,
  TimeLineBox,
  TimeLineInnerBox,
  TimeLineItemText,
  TimeLineItemTitle,
  Arrow,
} from './TimeLineStyles';
import { Divider, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => {
  return (
    <Section id='objectifs'>
      <Divider src='/images/DividerECL.png' />
      <SectionTitle>Notre Ambition</SectionTitle>
      <SectionText>
      Être la première communauté francophone performante et conviviale, à écrire l’histoire de Star Atlas. <br/>
      </SectionText>
      <TimeLineContainer>
        {TimeLineData.map((item, index) => (
          <TimeLineBox key={index}>
            <TimeLineInnerBox index={index}>
              <TimeLineItemTitle>{item.year}</TimeLineItemTitle>
              <TimeLineItemText>{item.text}</TimeLineItemText>
            </TimeLineInnerBox>
            {!(index == TimeLineData.length - 1) && <Arrow src='/images/timeline/arrow.png' />}
          </TimeLineBox>
        ))}
      </TimeLineContainer>
      <SectionText>
      Es-tu prêt à relever les défis d’un nouveau métavers et saisir les opportunités qui s’offrent à toi ?
      </SectionText>
      <Divider src='/images/DividerECL.png' />
      </Section>
  );
};

export default Timeline;
