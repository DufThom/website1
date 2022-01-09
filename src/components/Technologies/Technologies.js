import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { CgGames } from 'react-icons/cg';
import { FaBitcoin } from 'react-icons/fa';
import { GiHumanPyramid } from 'react-icons/gi';



import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <img src='/images/DividerECL.png'  />
    <SectionTitle>Missions</SectionTitle>
    <SectionText>
    Tu pourras faire carrière dans nos rangs et gravir un à un tout les échelons selon ton implication. Une fois dans nos rangs, tu auras l’occasion de rejoindre le “département” qui te convient (combattant, exploration, minage, etc.) afin de t’épanouir.
Tu seras accompagné par des membres expérimentés de l’univers crypto, gaming pour t’aider à faire fructifier tes investissements et compétences. 
Ton implication et ta loyauté seront récompensés à leur juste valeur en matière de responsabilités et de rémunération en crypto-monnaie.  
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <CgGames size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Gaming</ListTitle>
          <ListParagraph>
            Experience sur  <br />
            Eve online
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaBitcoin size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Crypto</ListTitle>
          <ListParagraph>
            OG de l'écosystème <br />
            blockchain et trading
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiHumanPyramid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Valeurs</ListTitle>
          <ListParagraph>
            Ambiance bienveillante <br />
            de partage et de réussite commune
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <img src='/images/DividerECL.png'  />
  </Section>
);

export default Technologies;
