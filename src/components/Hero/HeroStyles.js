import styled from 'styled-components';

export const VideoSection = styled.div`
  overflow: hidden;
  width: 100%;
  height: 550px;
  padding: 0;
  margin: 0;
  position: relative;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 330px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 160px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 550px;
  padding: 0;
  margin: 0;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 330px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 160px;
  }
`;
