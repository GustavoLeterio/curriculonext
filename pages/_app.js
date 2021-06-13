import { createGlobalStyle, ThemeProvider } from 'styled-components'
const theme = {
  colors: {
    primary: '#F18888',
    white: '#FAFAFA',
    black: '#000000',
    background: '#00061A'
  },
}

const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior:smooth;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Aleo','serif';
    background-color: ${theme.colors.background};
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Aleo:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
