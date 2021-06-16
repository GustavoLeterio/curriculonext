import styled from 'styled-components'
const Wrapper = styled.div`
    z-index: 0;
    padding: 1.5vh 0 1.5vh 1.5vh;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 0.8;
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
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
    font-size: clamp(1rem, 3vw, 5rem); 
    font-weight: normal;
`
export default function Title() {
    return (
        <Wrapper>
            <BigTitle>Front-End<br />END</BigTitle>
            <Title.SubTitle>Gustavo Letério</Title.SubTitle >
        </Wrapper>
    )
};
