import styled from 'styled-components'
import Footer from './Footer/index'
import Stripes from './Stripes/index'
import Logos from './Logos/index'
import Title from './Title/index'
import Character from './Character/index'
import Contacts from './Contacts/index'

const Wrapper = styled.section`
`
Wrapper.Section = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    height: 100vh;
@media screen and (max-aspect-ratio:5/3){
    grid-template-columns: 70vw 55vw;
    transform: translateX(-22vw);
}
    `
Wrapper.Section.LeftSideWrapper = styled.div`
display:flex;
align-items:center;
`
Wrapper.Section.RightSideWrapper = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    row-gap: 5vh;
    padding-top: 8vh;
`
export default function SectionOne() {
    return (
        <Wrapper>
            <Wrapper.Section>
                <Wrapper.Section.LeftSideWrapper>
                    <Stripes/>
                    <Contacts />
                    <Character />
                </Wrapper.Section.LeftSideWrapper>
                <Wrapper.Section.RightSideWrapper>
                    <Title />
                    <Logos />
                </Wrapper.Section.RightSideWrapper>
            </Wrapper.Section>
            <Footer />
        </Wrapper>
    )
};
