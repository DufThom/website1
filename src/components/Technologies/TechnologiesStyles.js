import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;

    margin: 32px 0;
  }
`;

export const ListItem = styled.li`
  width: 320px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: center / contain no-repeat url('/images/timeline/circle.png');

  @media ${(props) => props.theme.breakpoints.md} {
    width: 200px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    width: 320px;
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
    font-size: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 28px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);
  width: 60%;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;
