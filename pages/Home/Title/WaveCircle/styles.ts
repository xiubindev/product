import styled from '@emotion/styled';

export const Svg = styled.svg`
  position: absolute;
  top: 0px;
  right: -70px;
  width: 100%;
  height: 100%;
  z-index: -1;
  @media screen and (min-width: 1550px) {
    right:-280px;
  }
  @media screen and (max-width: 1024px) {
    top: 0px;
    transform: rotate(180deg) translateX(-50px) scaleX(2);
  }
  path {
    transform: skew(54deg, -40deg) translateX(-110px) translateY(20px) scaleX(1.2);
    @media screen and (max-width: 1024px) {
      transform: scale(1.3);
    }
    
    @media screen and (min-width: 1550px) {
    transform: skew(53deg, -27deg) translateX(-314px) translateY(0px) scaleX(1.7) scaleY(0.95);
  }
  }

  .controls {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    padding: 15px;
  }

  .dot {
    fill: #1a237e;
    fill-opacity: 0.3;
    stroke: #1a237e;
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }
`;
