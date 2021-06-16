import styled from 'styled-components'

const Wrapper = styled.div`
    z-index: 4;
    display: grid;
    position: absolute;
    transform: translate(2vw,-1vh);
    row-gap: 2vh;
    @media screen and (max-aspect-ratio:5/3){
    transform: translate(24vw,-2vh);
}
`
Wrapper.A = styled.a`
    #Vector{
        transition: 0.2s;
    }
    &:hover #Vector{
    fill:  ${({ theme }) => theme.colors.primary};
  }
`
Wrapper.A.SVG = styled.svg`
text-shadow:0 0 5px 0 black;
`
export default function Contacts() {
  return (
    <Wrapper>
      <Wrapper.A.SVG width="12vh" height="12vh" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Wrapper.A target="_blank" rel="noreferrer noopener" href="www.linkedin.com/in/gustavoleterio/">
          <g id="linkedin" clipPath="url(#clip0)" filter="url(#filter0_d)">
            <path id="Vector" d="M73 13C39.8628 13 13 39.8628 13 73C13 106.137 39.8628 133 73 133C106.137 133 133 106.137 133 73C133 39.8628 106.137 13 73 13Z" fill="#000821" />
            <path id="Vector_2" d="M73 13C39.868 13 13 39.868 13 73C13 106.132 39.868 133 73 133C106.132 133 133 106.132 133 73C133 39.868 106.132 13 73 13ZM55.5647 103.703H40.952V59.7404H55.5647V103.703ZM48.2588 53.7373H48.1636C43.26 53.7373 40.0886 50.3618 40.0886 46.143C40.0886 41.829 43.3571 38.5469 48.3558 38.5469C53.3546 38.5469 56.4308 41.829 56.526 46.143C56.526 50.3618 53.3546 53.7373 48.2588 53.7373ZM108.255 103.703H93.6442V80.1841C93.6442 74.2735 91.5284 70.2424 86.2413 70.2424C82.2047 70.2424 79.8005 72.9615 78.744 75.5864C78.3577 76.5257 78.2634 77.8386 78.2634 79.1523V103.703H63.6516C63.6516 103.703 63.8429 63.8649 63.6516 59.7404H78.2634V65.9651C80.2052 62.9695 83.6796 58.7086 91.4323 58.7086C101.046 58.7086 108.255 64.9919 108.255 78.495V103.703Z" fill="#FAFAFA" />
          </g>
          <defs>
            <filter id="filter0_d" x="0" y="0" width="146" height="146" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="6.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <clipPath id="clip0">
              <rect width="120" height="120" fill="white" transform="translate(13 13)" />
            </clipPath>
          </defs>
        </Wrapper.A>
      </Wrapper.A.SVG>
      <Wrapper.A.SVG width="12vh" height="12vh" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Wrapper.A target="_blank" rel="noreferrer noopener" href="mailto:gustavoleterio@gmail.com">
          <g id="gmail" clipPath="url(#clip0)" filter="url(#filter0_d)">
            <path id="Vector" d="M73 13C39.8628 13 13 39.8628 13 73C13 106.137 39.8628 133 73 133C106.137 133 133 106.137 133 73C133 39.8628 106.137 13 73 13Z" fill="#000821" />
            <path id="Vector_2" d="M73 13C39.8628 13 13 39.8628 13 73C13 106.137 39.8628 133 73 133C106.137 133 133 106.137 133 73C133 39.8628 106.137 13 73 13ZM100.032 46.3333L72.9778 67.7211L45.0439 46.3333H100.032ZM102.815 99.6667H42.2594V55.3661L70.1728 76.5383C70.9211 77.1106 72.0283 77.3967 72.9211 77.3967C73.835 77.3967 74.6283 77.0967 75.385 76.4989L102.815 54.6789V99.6667Z" fill="#FAFAFA" />
          </g>
          <defs>
            <filter id="filter0_d" x="0" y="0" width="146" height="146" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="6.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <clipPath id="clip0">
              <rect width="120" height="120" fill="white" transform="translate(13 13)" />
            </clipPath>
          </defs>
        </Wrapper.A>
      </Wrapper.A.SVG>
      <Wrapper.A.SVG width="12vh" height="12vh" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Wrapper.A target="_blank" rel="noreferrer noopener" href="#">
          <g id="facebook" clipPath="url(#clip0)" filter="url(#filter0_d)">
            <path id="Vector" d="M73 13C39.8628 13 14 39.8628 14 73C14 106.137 39.8628 133 73 133C106.137 133 132 106.137 132 73C132 39.8628 106.137 13 73 13Z" fill="#000821" />
            <path id="Vector_2" d="M13 73.2512C13 39.9757 39.8634 13 73.0004 13C106.137 13 133 39.9757 133 73.234C133 104.026 109.985 128.934 80.2988 132.562V85.8126H94.734L96.8992 68.9797H80.2988V58.2367C80.2988 53.3644 81.6401 50.0453 88.5972 50.0453L97.4717 50.0409V34.9877C95.9429 34.7857 90.6764 34.3272 84.5482 34.3272C71.7528 34.3272 62.9935 42.1751 62.9935 56.5765V68.9884H48.5197V85.8212H62.9935V132.16C34.6313 127.374 13 103.095 13 73.2512Z" fill="#FAFAFA" />
          </g>
          <defs>
            <filter id="filter0_d" x="0" y="0" width="146" height="146" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="6.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <clipPath id="clip0">
              <rect width="120" height="120" fill="white" transform="translate(13 13)" />
            </clipPath>
          </defs>
        </Wrapper.A>
      </Wrapper.A.SVG>
      <Wrapper.A.SVG width="12vh" height="12vh" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Wrapper.A href="#">
          <g id="github" clipPath="url(#clip0)" filter="url(#filter0_d)">
            <path id="Vector" d="M73 13C39.8628 13 13 39.8628 13 73C13 106.137 39.8628 133 73 133C106.137 133 133 106.137 133 73C133 39.8628 106.137 13 73 13Z" fill="#000821" />
            <path id="Vector_2" d="M73 13C39.87 13 13 39.865 13 73C13 99.51 30.19 122 54.035 129.935C57.03 130.49 58 128.63 58 127.05V115.88C41.31 119.51 37.835 108.8 37.835 108.8C35.105 101.865 31.17 100.02 31.17 100.02C25.725 96.295 31.585 96.375 31.585 96.375C37.61 96.795 40.78 102.56 40.78 102.56C46.13 111.73 54.815 109.08 58.24 107.545C58.775 103.67 60.33 101.02 62.05 99.525C48.725 98 34.715 92.855 34.715 69.87C34.715 63.315 37.06 57.965 40.895 53.765C40.275 52.25 38.22 46.145 41.48 37.885C41.48 37.885 46.52 36.275 57.985 44.035C62.77 42.705 67.9 42.04 73 42.015C78.1 42.04 83.235 42.705 88.03 44.035C99.485 36.275 104.515 37.885 104.515 37.885C107.78 46.15 105.725 52.255 105.105 53.765C108.955 57.965 111.28 63.32 111.28 69.87C111.28 92.915 97.245 97.99 83.885 99.475C86.035 101.335 88 104.985 88 110.585V127.05C88 128.645 88.96 130.52 92.005 129.93C115.83 121.985 133 99.5 133 73C133 39.865 106.135 13 73 13Z" fill="#FAFAFA" />
          </g>
          <defs>
            <filter id="filter0_d" x="0" y="0" width="146" height="146" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="6.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <clipPath id="clip0">
              <rect width="120" height="120" fill="white" transform="translate(13 13)" />
            </clipPath>
          </defs>
        </Wrapper.A>
      </Wrapper.A.SVG>
    </Wrapper >
  );
}