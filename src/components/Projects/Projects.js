import React from 'react';

import { ProjectPic, SectionRow, SectionText } from './ProjectsStyles';
import { Divider, Section } from '../../styles/GlobalComponents';

import { ProjectData } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    {ProjectData.map((item, index) => (
      <SectionRow>
        {index % 2 && <ProjectPic src={item.picture} />}
        <SectionText>{item.text}</SectionText>
        {!(index % 2) && <ProjectPic src={item.picture} />}
      </SectionRow>
    ))}
    <Divider src='/images/DividerECL.png' />
  </Section>
);

export default Projects;
