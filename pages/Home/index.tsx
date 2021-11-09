import React from 'react';
import { Container, BottomSupport } from './styles';
import Animals from './Animals';
import Space from './Space';
import Title from './Title';
import SideBar from '@components/SideBar';

const Home = () => {
  return (
    <Container>
      <Space />
      <Title />
      <Animals />
      <SideBar />
      <BottomSupport>help@zooz.club</BottomSupport>
    </Container>
  );
};

export default Home;
