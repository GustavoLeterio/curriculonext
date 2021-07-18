import styled from 'styled-components'
const Wrapper = styled.div`
grid-area:description;
padding: 4vh 0 1.5vh 5vw;
`
Wrapper.Title = styled.h1`
    font-weight:normal;
    font-size: clamp(1rem, 6vw, 7rem);
    display: inline-block;
    &:after{
    margin: 0.5vh 0 5vh 0.5vw;
    content: '';
    display: block;
    width: 60%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width .3s;
    border-radius: 10px;
    }
`

Wrapper.Title.PinkText = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bolder;
`
Wrapper.Paragraph = styled.p`
    font-size: clamp(1rem, 3vw, 2rem);
    margin: 5vh 0;
`
export default function Stripes() {
    return (
        <Wrapper>
            <Wrapper.Title>So, who am <Wrapper.Title.PinkText>I</Wrapper.Title.PinkText>?</Wrapper.Title>
            <Wrapper.Paragraph>
                My name is <Wrapper.Title.PinkText>Gustavo Letério</Wrapper.Title.PinkText>, I'm 18 years old living in a small town in Brazil, called Ourinhos, I came learning web developing since 2018 from a technical course focused on <Wrapper.Title.PinkText>Web Development</Wrapper.Title.PinkText> with HTML, CSS, JS, PHP, Java and MySQL.
            </Wrapper.Paragraph>
            <Wrapper.Paragraph>
                I felt in love by learning how to create beautyful and easy going aplications. With this feeling I find <Wrapper.Title.PinkText>NextJS</Wrapper.Title.PinkText> looking for creativity power and organization. Since then I became improving my skills with this library.
            </Wrapper.Paragraph>
            <Wrapper.Paragraph>
                Today I'm in the 2° semester of my graduation in <Wrapper.Title.PinkText>Analysis and Systems Development</Wrapper.Title.PinkText> in Fatec Ourinhos.
            </Wrapper.Paragraph>
        </Wrapper>
    )
};
