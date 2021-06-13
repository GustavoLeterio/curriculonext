import styled from 'styled-components'
import Footer from './Footer/index'
import Listras from './Listras/index'
import Logos from './Logos/index'
import Title from './Title/index'

const Wrapper = styled.div`
`
Wrapper.Section = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    `
Wrapper.Section.rightSideWrapper = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    row-gap: 5vh;
    padding-top: 8vh;    
`
export default function () {
    return (
        <Wrapper>
            <Wrapper.Section>
                <Listras />
                <Wrapper.Section.rightSideWrapper>
                    <Title />
                    <Logos/>
                </Wrapper.Section.rightSideWrapper>
            </Wrapper.Section>
            <Footer />
        </Wrapper>
    )
};
