import styled from 'styled-components'
import Stripes from './Stripes/index'
import Logos from './Logos/index'
import Title from './Title/index'
import Character from './Character/index'
import Contacts from './Contacts/index'

const Wrapper = styled.section` 
    z-index: 1;
    height: 80vh;
    padding-top:6vh;
    transition: 0.2s;
`
Wrapper.Section = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    position: fixed;
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
        <Wrapper id="SectionOne" >
            <Wrapper.Section>
                <Wrapper.Section.LeftSideWrapper>
                    <Stripes />
                    <Contacts />
                    <Character />
                </Wrapper.Section.LeftSideWrapper>
                <Wrapper.Section.RightSideWrapper>
                    <Title />
                    <Logos />
                </Wrapper.Section.RightSideWrapper>
            </Wrapper.Section>
        </Wrapper>
    )
};
