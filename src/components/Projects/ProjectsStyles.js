import styled from 'styled-components';

export const SectionRow = styled.div`
  display: flex;
  padding-bottom: 3.6rem;
  @media ${(props) => props.theme.breakpoints.md} {
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
`;

export const SectionText = styled.p`
  width: 60%;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin: 10px;
  white-space: pre-line;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 70%;
    max-width: 670px;
    font-size: 18px;
    line-height: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    &:nth-child(odd) {
      order: 2;
    }
  }
`;

export const ProjectPic = styled.img`
  width: 40%;
  margin: 10px;
  object-fit: cover;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 30%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 120px;
  }
`;
