import styled from 'styled-components'
import Header from '../src/components/Header/index.js'
//import house from "../assets/house.svg"

export default function Home() {
  return (
    <Header>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Aleo:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <Header.Title>Gustavo Letério</Header.Title>
      <Header.Nav>
        <Header.A href="#">Quem Sou Eu?</Header.A>
        <Header.A href="#">Contato</Header.A>
        <svg width="45" height="45" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Header.A href="#">
            <path d="M2.18111 51V27.7229C2.18111 26.0661 3.52425 24.7229 5.18111 24.7229H23.2674H40.7511C42.408 24.7229 43.7511 26.0661 43.7511 27.7229V51C43.7511 52.6569 42.408 54 40.7511 54H29.8821C28.2253 54 26.8821 52.6569 26.8821 51V41.1445C26.8821 40.2524 26.4868 39.3996 25.7922 38.8398C23.3401 36.8638 22.8839 36.9584 20.6943 38.8354C20.0318 39.4033 19.6526 40.238 19.6526 41.1106V51C19.6526 52.6569 18.3094 54 16.6526 54H5.18111C3.52425 54 2.18111 52.6569 2.18111 51Z" fill="black" />
            <path d="M20.7807 1.54818L1.42365 17.4532C-0.752277 19.2411 0.51195 22.7711 3.32819 22.7711H22.6649H42.4631C45.2951 22.7711 46.55 19.208 44.3431 17.4333L24.5653 1.52826C23.4582 0.637944 21.8784 0.646259 20.7807 1.54818Z" fill="black" />
          </Header.A>
        </svg>
      </Header.Nav>
    </Header>);
}
