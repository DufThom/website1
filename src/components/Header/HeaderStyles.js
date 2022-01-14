import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.background1};
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 25%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 20%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: 6rem;
    width: 80%;
    font-size: 14px;
    padding: 0.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    font-size: 14px;
    padding: 0.5rem;
  }
`;

export const MenuLinksContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const FullMenuLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const BurgerMenuContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const NavLink = styled.li`
  display: flex;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  margin: 20px 20px;
  font-size: 24px;
  font-weight: bold;
  transition: 0.3s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    transform: translateX(5px);
  }
`;

export const Logo = styled.img`
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
export const LogoMobile = styled.img`
  display: none;
  width: 80%;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const FormButton = styled.div`
  color: white;
  padding: 20px;
  margin: 0 20px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.25em;
  background: center / contain no-repeat url('${(props) => props.pic}');
  text-transform: uppercase;
  transition: 0.3s ease;
  &:hover {
    // background-color: #212d45;
    transform: scale(1.1);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    padding: 12px;
    margin: 0 10px;
  }
`;
