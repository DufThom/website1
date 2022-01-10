import styled from 'styled-components';

export const TimeLineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const TimeLineBox = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50%;
  }
`;

export const TimeLineInnerBox = styled.div`
  background: center / contain no-repeat url('/images/timeline/frame.png');
  width: 200px;
  height: 150px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 175px;
    height: 125px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 150px;
    height: 100px;
  }
`;

export const TimeLineItemTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 24px;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.accent1};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const TimeLineItemText = styled.p`
  font-size: 20px;
  letter-spacing: 0.02em;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const Arrow = styled.img`
  height: 150px;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 80px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 80px;
  }
`;
