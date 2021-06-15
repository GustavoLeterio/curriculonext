import styled from 'styled-components'
import Stripes from './Stripes/index'
import Top from './Top/index'

const Wrapper = styled.section`
display: grid;
grid-template-rows: 0 100vw;
background-color: white;
z-index: 4;
`
export default function SectionTwo() {
    return (
        <Wrapper id="SectionTwo">
            <Top />
            <Stripes />
        </Wrapper>
    )
};
