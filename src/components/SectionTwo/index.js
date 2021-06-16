import styled from 'styled-components'
import Stripes from './Stripes/index'
import Description from './Description/index'

const Wrapper = styled.section`
padding-top:10vh;
z-index: 1;
display: grid;
grid-template-columns: 70vw auto;
grid-template-areas:
"description stripes"
"description stripes";
background-color: ${({ theme }) => theme.colors.white};
`
export default function SectionTwo() {
    return (
        <Wrapper id="SectionTwo">
            <Description />
            <Stripes />
        </Wrapper>
    )
};
