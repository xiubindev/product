import styled from '@emotion/styled';

export const SpaceSection = styled.section`
  display: block;
  margin: 0;
  position: absolute;
  width: 45%;
  height: 100%;
`;

export const Planet = styled.div`
  display: block;
  position: absolute;
  > .wrap_star {
    position: relative;
    display: inline-block;

    > img {
      position: relative;
      z-index: 2;
    }
    > .wrap_svg {
      position: absolute;
      top: 5px;
      left: -30px;

      .path {
        stroke-dasharray: 2000;
        stroke-dashoffset: 2000;
        animation: paint 1s linear 1s forwards;
      }

      @keyframes paint {
        from {
          stroke-dashoffset: 2000;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
      @media screen and (max-width: 768px) {
        top: 5px;
        left: -20px;
      }
    }

    .mobile {
      display: none;
    }

    @media screen and (max-width: 768px) {
      .pc {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .wrap_star {
      > img {
        width: 40px;
        &.planet {
          width: 170px;
        }
      }
    }
  }

  @media screen and (max-width: 550px) {
    .wrap_star {
      > img {
        width: 35px;
        &.planet {
          width: 120px;
        }
      }
    }
  }

  &.star_left {
    top: 20%;
    left: 50px;
    @media screen and (max-width: 1024px) {
      top: 77vw;
      left: 14%;
    }
    @media screen and (max-width: 550px) {
      top: 97vw;
    }
  }
  &.star_top {
    top: 9%;
    right: 33px;

    @media screen and (max-width: 1024px) {
      top: 54vw;
      left: 37%;
      right: 0;
    }
    @media screen and (max-width: 550px) {
      top: 63vw;
    }
  }
  &.star_bottom {
    right: -10%;
    bottom: 30%;
    @media screen and (max-width: 1024px) {
      right: 5%;
      top: 63vw;
    }
    @media screen and (max-width: 550px) {
      top: 78vw;
      right: 5%;
    }
    @media screen and (max-width: 360px) {
      top: 73vw;
      right: -15%;
    }
  }
  &.planet {
    top: 25%;
    left: 55%;

    @media screen and (max-width: 1024px) {
      top: 65vw;
      left: 24%;
    }
    @media screen and (max-width: 550px) {
      top: 75vw;
      left: 6%;
    }
  }
`;
