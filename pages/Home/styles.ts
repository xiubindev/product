import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BottomSupport = styled.div`
  display: block;
  position: fixed;
  right: 30px;
  bottom: 30px;
  color: #bfbfbf;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
