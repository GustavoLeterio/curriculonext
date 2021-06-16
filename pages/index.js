import styled from 'styled-components'
import Header from '../src/components/Header/index.js'
import Top from '../src/components/Top/index.js'
import SectionOne from '../src/components/SectionOne/index.js'
import SectionTwo from '../src/components/SectionTwo/index.js'

const Body = styled.body`
display: flex;
flex-flow: column;
`
export default function Home() {
  return (
    <Body>
      <Header />
      <SectionOne />
      <Top />
      <SectionTwo />
    </Body>
  );
}
