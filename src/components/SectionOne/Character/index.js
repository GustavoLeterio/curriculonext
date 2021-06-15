import styled from 'styled-components'
const Image = styled.img`
    z-index: 1;
    width: auto;
    height: 70vh;
    position: absolute;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transform: translate(7vw,4vh);
    @media screen and (max-aspect-ratio:5/3){
    transform: translate(27vw,4vh);
}
`
export default function Character() {
    return (
        <Image draggable="false"
            src="/assets/PNG/photo.png"
            alt="Picture of the author"
            layout="responsive"
        />
    )
};
