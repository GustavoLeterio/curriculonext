import styled from 'styled-components'
const SVG = styled.svg`
transform:translateY(-18vh);
filter: drop-shadow( 0px -5px 5px rgba(0, 0, 0, 0.5));
z-index: 2;
`
export default function Top() {
    return (
        <SVG width="100%" height="20vh"  xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 198.287V67.0002L0 0.786865V198.287H1920Z" fill="#FAFAFA" />
        </SVG>
    )
};//
