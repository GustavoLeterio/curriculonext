import styled from 'styled-components'

const Header = styled.header`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    list-style-type: none;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7vh 2vw;
    font-size: 40px;
}
`
Header.Title = styled.h1`
    margin:1vh 1vw;
    font-size: 50px;
    display:inline;
    font-weight:400;
`
Header.Nav = styled.nav`
    margin:1vh 1vw;
    float:right;
    display: flex;
    align-items: center;
    justify-content: center;
`
Header.A = styled.a`
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
export default Header;