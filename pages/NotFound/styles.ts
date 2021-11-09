import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url(../../assets/image/bg_notfound.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 205px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;

  > span {
    color: #ff971d;
  }

  @media screen and (max-width: 768px) {
    font-size: 100px;
  }
`;

export const SubTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 68px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

export const Text = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #878787;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
