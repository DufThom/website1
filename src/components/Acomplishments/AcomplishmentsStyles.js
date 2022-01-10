import styled from 'styled-components';

export const Boxes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  margin-bottom: 50px;
  background: center / 50% no-repeat url('/images/accomp/eclypse.png');

  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 0;
    background: center / 100% no-repeat url('/images/accomp/eclypse-tablet.png');
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 0;
    background: center / 100% no-repeat url('/images/accomp/eclypse-mobile.png');
  }
`;

export const Box = styled.div`
  width: 50%;
  display: flex;
  padding-left: 60px;
  justify-content: flex-start;
  &:nth-child(2n) {
    justify-content: flex-end;
    padding-left: 0px;
    padding-right: 60px;
    @media ${(props) => props.theme.breakpoints.sm} {
      padding-right: 20px;
    }
  }
  &:nth-child(3) {
    padding-left: 0;
  }
  &:nth-child(4) {
    padding-right: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 20px;
  }
`;

export const InnerBox = styled.div`
  width: 250px;
  height: 100%;
  padding: 70px 50px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: ${(props) => (props.align === 'start' ? 'left' : 'right')};
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 200px;
    padding: 70px 40px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 150px;
    padding: 40px 30px 30px 30px;
  }
`;

export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-align: ${(props) => props.align};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  text-align: ${(props) => props.align};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
