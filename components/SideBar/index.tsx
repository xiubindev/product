import React from 'react';
import { Container, SNSLink } from './styles';

import medium from '@assets/image/medium.png';
import telegram from '@assets/image/telegram.png';
import twitter from '@assets/image/twitter.png';

const SideBar = () => {
  return (
    <Container>
      <SNSLink href="https://medium.com/zoozclub" target="_blank">
        <img src={medium} alt="sns medium" />
      </SNSLink>
      <SNSLink href="https://t.me/zoozclub" target="_blank">
        <img src={telegram} alt="sns telegram" />
      </SNSLink>
      <SNSLink href="https://twitter.com/zoozclub" target="_blank">
        <img src={twitter} alt="sns twitter" />
      </SNSLink>
    </Container>
  );
};

export default SideBar;
