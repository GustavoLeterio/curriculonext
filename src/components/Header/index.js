import styled from 'styled-components'

const Wrapper = styled.header`
    width: 100%;
    padding: 1.5vh 2vw;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    position:fixed;
    justify-content: space-between;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1;
`
Wrapper.Title = styled.h1`
    display: flex;
    align-items: center;
    font-weight:normal;
    font-size: clamp(0.5rem, 5vw, 2.5rem); 
`
Wrapper.Nav = styled.nav`
    font-size: clamp(0.5rem, 5vw, 2rem); 
    margin:0 1vw;
    float:right;
    display: flex;
    align-items: center;
`
Wrapper.A = styled.a`
    margin:0 2vw 0 0;
    text-decoration:none;
    color:black;
    transition:0.2s;
    path{
        transition: 0.2s;
    }
    &:hover{
    color: ${({ theme }) => theme.colors.primary};
  }
    &:hover path{
    fill:  ${({ theme }) => theme.colors.primary};
  }
`
export default function Header() {
  return (
    <Wrapper>
      <Wrapper.Title>Gustavo Letério</Wrapper.Title>
      <Wrapper.Nav>
        <Wrapper.A href="#">Quem Sou Eu?</Wrapper.A>
        <Wrapper.A href="#">Contato</Wrapper.A>
        <svg width="45" height="45" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Wrapper.A href="#">
            <path d="M2.18111 51V27.7229C2.18111 26.0661 3.52425 24.7229 5.18111 24.7229H23.2674H40.7511C42.408 24.7229 43.7511 26.0661 43.7511 27.7229V51C43.7511 52.6569 42.408 54 40.7511 54H29.8821C28.2253 54 26.8821 52.6569 26.8821 51V41.1445C26.8821 40.2524 26.4868 39.3996 25.7922 38.8398C23.3401 36.8638 22.8839 36.9584 20.6943 38.8354C20.0318 39.4033 19.6526 40.238 19.6526 41.1106V51C19.6526 52.6569 18.3094 54 16.6526 54H5.18111C3.52425 54 2.18111 52.6569 2.18111 51Z" fill="black" />
            <path d="M20.7807 1.54818L1.42365 17.4532C-0.752277 19.2411 0.51195 22.7711 3.32819 22.7711H22.6649H42.4631C45.2951 22.7711 46.55 19.208 44.3431 17.4333L24.5653 1.52826C23.4582 0.637944 21.8784 0.646259 20.7807 1.54818Z" fill="black" />
          </Wrapper.A>
        </svg>
      </Wrapper.Nav>
    </Wrapper>);
}