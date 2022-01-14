import React from 'react';

import { ProjectPic, SectionRow, SectionText } from './ProjectsStyles';
import { Divider, Section } from '../../styles/GlobalComponents';

import { ProjectData } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <Divider src='/images/DividerECL.png' />
    {ProjectData.map((item, index) => (
      <SectionRow key={index}>
        {index % 2 === 0 && <ProjectPic src={item.picture} />}
        <SectionText>{item.text}</SectionText>
        {index % 2 !== 0 && <ProjectPic src={item.picture} />}
      </SectionRow>
    ))}
  </Section>
);

export default Projects;
