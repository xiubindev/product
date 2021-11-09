import styled from '@emotion/styled';

export const AnimalsSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  margin-bottom: 0;
  @media screen and (max-width: 1024px) {
    width: 100%;
    left: 0;
    transform: unset;
    position: relative;
  }
`;

export const Animal = styled.div`
  display: block;
  width: 20%;
  margin: auto;
  margin-bottom: 0;

  @media screen and (max-width: 1024px) {
    width: 33.3%;
  }

  &.wrap_animal01 {
    animation: moving 1.5s linear infinite;
  }

  &.wrap_animal02 {
    animation: moving 1.5s linear 0.3s infinite;
  }

  &.wrap_animal03 {
    animation: moving 1.5s linear 0.1s infinite;

    @media screen and (max-width: 1024px) and (min-width: 1150px) {
      left: 41%;
      bottom: 66%;
      transform: scale(1.15) rotate(13deg);
      animation: moving3 1.5s linear 0.1s infinite;
    }
    @media screen and (max-width: 1024px) {
      position: absolute;
      left: 40%;
      bottom: 69%;
      transform: scale(1.1) rotate(13deg);
      animation: moving2 1.5s linear 0.1s infinite;
    }
  }
  &.wrap_animal04 {
    overflow: hidden;
    animation: moving 1.5s linear 0.2s infinite;
  }

  @keyframes moving {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes moving2 {
    0% {
      transform: scale(1.1) rotate(13deg) translateY(0);
    }
    50% {
      transform: scale(1.1) rotate(13deg) translateY(10px);
    }
    100% {
      transform: scale(1.1) rotate(13deg) translateY(0);
    }
  }

  @keyframes moving3 {
    0% {
      transform: scale(1.15) rotate(13deg) translateY(0);
    }
    50% {
      transform: scale(1.15) rotate(13deg) translateY(10px);
    }
    100% {
      transform: scale(1.15) rotate(13deg) translateY(0);
    }
  }

  > img {
    width: 110%;
    margin-bottom: 0;

    &.animal01 {
      max-width: 428px;
    }
    &.animal02 {
      max-width: 380px;
    }
    &.animal03 {
      max-width: 370px;
    }
    &.animal04 {
      width: 85%;
      max-width: 340px;
    }

    @media screen and (max-width: 1024px) {
      &.animal01 {
        max-width: 470px;
      }
      &.animal02 {
        max-width: 420px;
        transform: translate(-6%, 0);
      }
      &.animal03 {
        max-width: 420px;
      }
      &.animal04 {
        max-width: 390px;
        width: 100%;
        transform: translate(2%, 6%) rotate(-8deg);
      }
    }
  }
`;
