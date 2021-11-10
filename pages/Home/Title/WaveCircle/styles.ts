import styled from '@emotion/styled';

export const Svg = styled.svg`
  position: absolute;
  top: 0px;
  z-index: -1;
  width: 54vw;
  height: 100%;
  right: -150px;
  transform: scaleX(1.7) translateY(-42vh);
  @media screen and (min-width:2000px){
    width:47vw;
    transform: scaleX(1.6) translateY(-450px);
  }
  @media screen and (min-width:2200px){
    width:51vw;
  }
  @media screen and (min-width:2500px){
    width:40vw;
    transform: scaleX(1.7) translateY(-450px);
  }
  @media screen and (max-width: 1400px) {
    width:56vw;
  }
  @media screen and (max-width: 1024px) {
    width: 100vw;
    right:-50px;
    transform: scaleX(2.5) scaleY(1.2) translateY(-35vh);
  }
  @media screen and (max-width: 900px) {
    right:-50px;
    transform: scaleX(2.2) scaleY(1.2) translateY(-35vh);
  }
  @media screen and (max-width: 768px) {
    transform: scaleX(2.2) scaleY(1.2) translateY(-35vh);
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
