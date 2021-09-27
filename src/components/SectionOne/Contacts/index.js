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
    display: block;
    width: 12vh;;
    height: 12vh;
    #Vector,#VectorBorder{
        transition: 0.2s;
    }
    &:hover #Vector{
    fill:  ${({ theme }) => theme.colors.primary};
    stroke: ${({ theme }) => theme.colors.primary};
  }
  &:hover #VectorBorder{
    stroke: ${({ theme }) => theme.colors.primary};
  }
`
export default function Contacts() {
  return (
    <Wrapper>
      <Wrapper.A target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/gustavoleterio/">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </svg>
      </Wrapper.A>
      <Wrapper.A target="_blank" rel="noreferrer noopener" href="mailto:gustavoleterio@gmail.com">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </svg>
      </Wrapper.A>
      <Wrapper.A href="https://github.com/Leterinho" rel="noreferrer noopener" target="_blank">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </svg>
      </Wrapper.A>
      <Wrapper.A href="assets/PDF/cv.pdf" rel="noreferrer noopener" target="_blank">
        <svg viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="CV" clip-path="url(#clip0)" filter="url(#filter0_d)">
            <path id="Vector_2" d="M73 13C39.8628 13 13 39.8628 13 73C13 106.137 39.8628 133 73 133C106.137 133 133 106.137 133 73C133 39.8628 106.137 13 73 13Z" fill="#FAFAFA" />
            <g id="Logo">
              <g id="CV_2">
                <path id="Vector" d="M69.1934 75.832H67.8494C67.4948 75.832 67.2894 75.664 67.2334 75.328L67.0094 72.808C65.4414 72.304 64.0321 72.052 62.7814 72.052C60.6721 72.052 58.9361 72.7613 57.5734 74.18C56.2108 75.6547 55.5294 77.5867 55.5294 79.976C55.5294 81.5253 55.8094 82.8973 56.3694 84.092C56.9481 85.2867 57.7601 86.22 58.8054 86.892C59.8694 87.5453 61.1014 87.872 62.5014 87.872C63.5841 87.872 64.5268 87.7413 65.3294 87.48C66.1508 87.2 66.9161 86.7333 67.6254 86.08C67.7934 85.9307 67.9614 85.856 68.1294 85.856C68.2788 85.856 68.4094 85.912 68.5214 86.024L69.5854 87.2C67.8494 89.216 65.4414 90.224 62.3614 90.224C60.4201 90.224 58.7214 89.7853 57.2654 88.908C55.8281 88.012 54.7174 86.7893 53.9334 85.24C53.1681 83.6907 52.7854 81.936 52.7854 79.976C52.7854 76.9707 53.7188 74.5067 55.5854 72.584C57.4334 70.68 59.9628 69.728 63.1734 69.728C64.6668 69.728 66.6734 70.1947 69.1934 71.128V75.832ZM91.2229 71.184C91.2229 71.464 91.0922 71.632 90.8309 71.688L89.4309 72.024L82.0669 90.056H79.6309L72.2949 72.024C71.5109 71.856 71.0349 71.744 70.8669 71.688C70.5869 71.632 70.4469 71.464 70.4469 71.184V69.952H77.1109V71.184C77.1109 71.4827 76.9242 71.66 76.5509 71.716L75.9349 71.856L75.0949 72.024L80.2189 84.764C80.4242 85.212 80.6482 85.94 80.8909 86.948C81.1522 85.8653 81.3669 85.128 81.5349 84.736L86.6029 71.996C85.7069 71.828 85.1749 71.716 85.0069 71.66C84.7269 71.604 84.5869 71.4267 84.5869 71.128V69.952L91.2229 69.98V71.184Z" stroke="#000821" strokeWidth="1" fill="#000821" />
              </g>
              <path id="VectorBorder" d="M42 105.122C42 105.122 42.3941 47.7889 42.4855 33.9659C42.4964 32.3091 43.8473 31 45.5042 31H99C100.657 31 102 32.3431 102 34V114.962C102 116.633 100.633 117.983 98.9618 117.961L54.1008 117.391M42 105.122H51.1008C52.7577 105.122 54.1008 106.465 54.1008 108.122V117.391M42 105.122C42 105.633 53.5967 117.391 54.1008 117.391" stroke="#000821" stroke-width="3" />
              <path id="Vector" d="M51.1523 57.2937V62C51.1523 63.1046 52.0478 64 53.1523 64H65.4235C66.5281 64 67.4235 63.1046 67.4235 62V57.2937C67.4235 56.8984 67.3064 56.5121 67.087 56.1833L64.2208 51.8896C63.8497 51.3338 63.2256 51 62.5573 51H56.0185C55.3503 51 54.7261 51.3338 54.3551 51.8896L51.4889 56.1833C51.2695 56.5121 51.1523 56.8984 51.1523 57.2937Z" fill="#000821" stroke="#000821" />
              <path id="Vector" d="M74.0336 49.5C74.0336 48.6716 74.7051 48 75.5336 48H92.8726C93.701 48 94.3726 48.6716 94.3726 49.5V49.5C94.3726 50.3284 93.701 51 92.8726 51H75.5336C74.7051 51 74.0336 50.3284 74.0336 49.5V49.5Z" fill="#000821" />
              <rect id="Vector" x="74.0336" y="54" width="20.339" height="3" rx="1.5" fill="#000821" />
              <rect id="Vector" x="73.5254" y="60" width="16.2712" height="3" rx="1.5" fill="#000821" />
              <rect id="Vector" x="79.1185" y="42" width="16.2712" height="3" rx="1.5" fill="#000821" />
              <rect id="Vector" x="74.0336" y="42" width="4.0678" height="3" rx="1.5" fill="#000821" />
              <rect id="Vector" x="90.8134" y="60" width="4.0678" height="3" rx="1.5" fill="#000821" />
              <path id="Vector" d="M63.1227 44C63.1227 46.0513 61.4258 47.75 59.288 47.75C57.1502 47.75 55.4532 46.0513 55.4532 44C55.4532 41.9487 57.1502 40.25 59.288 40.25C61.4258 40.25 63.1227 41.9487 63.1227 44Z" fill="#000821" stroke="#000821" stroke-width="2.5" />
              <path id="Vector" d="M76.0357 103.996V96.1579C76.0357 96.0707 75.9635 96 75.8743 96L68.1257 96C68.0365 96 67.9643 96.0707 67.9643 96.1578V103.996C67.9643 104.084 67.892 104.154 67.8028 104.154H62.5007C62.3487 104.154 62.281 104.341 62.3991 104.435L71.8984 111.965C71.9577 112.012 72.0425 112.012 72.1018 111.965L81.6009 104.435C81.7191 104.341 81.6513 104.154 81.4993 104.154H76.1972C76.108 104.154 76.0357 104.084 76.0357 103.996Z" fill="#000821" />
              <rect id="Vector" x="59.2882" y="93" width="26.4407" height="2" rx="1" fill="#000821" />
            </g>
          </g>
          <defs>
            <filter id="filter0_d" x="0" y="0" width="146" height="146" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
        </svg>
      </Wrapper.A>
    </Wrapper >
  );
}