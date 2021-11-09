import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  position: fixed;
  bottom: 55px;
  right: 30px;
  @media screen and (max-width: 1024px) {
    bottom: 35%;
    right: 20px;
  }
  @media screen and (max-width: 550px) {
    bottom: 30%;
  }
`;

export const SNSLink = styled.a`
  display: block;
  margin: 15px 0;
  @media screen and (max-width: 1024px) {
    width: 50px;
    > img {
      width: 100%;
    }
  }
  @media screen and (max-width: 550px) {
    width: 40px;
  }
`;
