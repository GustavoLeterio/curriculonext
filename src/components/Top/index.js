import styled from 'styled-components'

const SVG = styled.svg`
grid-area:top;
z-index: 2;
`
export default function Top() {
    return (
        <SVG width="100%" viewBox="0 0 100 10 " height="auto"  xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 198.287V67.0002L0 0.786865V198.287H1920Z"  width="100%" fill="#FAFAFA" />
        </SVG>
    )
};
