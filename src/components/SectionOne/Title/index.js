import styled from 'styled-components'
const Title = styled.div`
    padding: 1.5vh 0 1.5vh 1.5vh;
    border-left: 3px solid #F18888;
    font-size: clamp(1.5rem, 8vw, 15rem); 
    color: #F18888;
    line-height: 0.8;
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
Title.SubTitle = styled.h1`
    font-size: clamp(0.5rem, 5vw, 2.5rem); 
    font-weight: normal;
`
export default function () {
    return (
        <Title>
            Front-End<br/>END
            <Title.SubTitle class="Title__SubTitle-p5la25-1 ilICRm">Gustavo Letério</Title.SubTitle >
        </Title>
    )
};
