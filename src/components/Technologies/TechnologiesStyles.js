import styled from 'styled-components';

export const List = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
`;

export const ListItem = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: center / contain no-repeat url('/images/timeline/circle.png');
  margin: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 200px;
    height: 200px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.main};
  text-transform: uppercase;
  font-size: 28px;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.accent1};
  text-align: center;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);
  width: 60%;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 10px;
  }
`;
