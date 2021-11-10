import styled from '@emotion/styled';

export const TitleSection = styled.section`
  display: block;
  margin: 0;
  text-align: right;
  @media screen and (max-width: 1024px) {
    margin-bottom: 50vw;
  }

  > .wrap_images {
    position: relative;
    width: 55%;
    display: inline-block;
    height:30vh;

  @media screen and (max-width: 1500px) {
    display: inline-block;
    }

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 568px) {
      width: 100%;
    }

    > .bg_title {
      position: relative;
      z-index: 0;
      float: right;
      width: 100%;
      max-width: 1100px;
      opacity: 0;

      @media screen and (max-width: 1024px) {
        width: 115%;
        margin-top: -7%;
        max-width: none;
      }
      @media screen and (max-width: 550px) {
        margin-top: 0;
        width: 125%;
      }
    }
    > .group_title {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      z-index: 1;
      right: 40px;
      top: 4vw;
      width: 100%;

      @media screen and (max-width: 1024px) {
        top: 60px;
        right: 7%;
      }

      > .logo_main {
        width: 70%;
        max-width: 800px;
        float: right;
        @media screen and (max-width: 1024px) {
          width: 85%;
        }
      }
      > .comingsoon {
        width: 60%;
        max-width: 600px;
        float: right;
        @media screen and (max-width: 1024px) {
          width: 70%;
          max-width: 700px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TopSupport = styled.span`
  display: none;
  color: #bfbfbf;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 13px;
    display: inline-block;
  }
`;