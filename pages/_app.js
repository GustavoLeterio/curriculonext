import { createGlobalStyle, ThemeProvider } from 'styled-components'
const theme = {
  colors: {
    primary: '#F18888',
    white: '#FAFAFA',
    black:'#000000'
  },
}

const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior:smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Aleo','serif';
    background-color: #000821;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
