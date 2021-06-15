import styled from 'styled-components'
import Header from '../src/components/Header/index.js'
import SectionOne from '../src/components/SectionOne/index.js'
import SectionTwo from '../src/components/SectionTwo/index.js'

const Body = styled.body`
  display: grid;
  grid-auto-rows: 100vh 100vh;
`
export default function Home() {
  return (
    <Body>
      <Header />
      <SectionOne />
      <SectionTwo />
    </Body>
  );
}
