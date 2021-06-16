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
    width: 75%;
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
            <Wrapper.Title>Afinal, quem sou <Wrapper.Title.PinkText>eu</Wrapper.Title.PinkText>?</Wrapper.Title>
            <Wrapper.Paragraph>
                Meu nome é <Wrapper.Title.PinkText>Gustavo Letério</Wrapper.Title.PinkText>, tenho 18 anos e moro em Ourinhos - SP, venho aprendendo desenvolvimento de sites desde 2018 a partir de um curso técnico voltado em <Wrapper.Title.PinkText>Web Development</Wrapper.Title.PinkText> com HTML, CSS, JS, PHP, Java e MySQL.
            </Wrapper.Paragraph>
            <Wrapper.Paragraph>
                Acabei me apaixonando pela criação de aplicações agradáveis e fáceis de navegar. Com isso encontrei em <Wrapper.Title.PinkText>NextJS</Wrapper.Title.PinkText> liberdade criativa e organização. Desde então venho aprimorando minhas habilidades com esta biblioteca.
            </Wrapper.Paragraph>
            <Wrapper.Paragraph>
                Atualmente estou no 1° semestre da gradução de <Wrapper.Title.PinkText>Análise e Desenvolvimento de Sistemas</Wrapper.Title.PinkText> na Fatec de Ourinhos.
            </Wrapper.Paragraph>
        </Wrapper>
    )
};
