import styled from 'styled-components'
const Wrapper = styled.div`
    padding: 1.5vh 0 1.5vh 1.5vh;
    color: #F18888;
    line-height: 0.8;
    border-left: 3px solid #F18888;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
const BigTitle = styled.h1`
    font-size: clamp(1.5rem, 8vw, 15rem); 
    font-weight: normal;
`
Title.SubTitle = styled.h1`
    font-size: clamp(0.5rem, 5vw, 2.5rem); 
    font-weight: normal;
`
export default function Title() {
    return (
        <Wrapper>
            <BigTitle>Front-End<br />END</BigTitle>
            <Title.SubTitle class="Title__SubTitle-p5la25-1 ilICRm">Gustavo Letério</Title.SubTitle >
        </Wrapper>
    )
};
