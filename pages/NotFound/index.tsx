import React from 'react';
import { Container, Title, SubTitle, Text } from './styles';

const NotFound = () => {
  return (
    <Container>
      <Title>
        4<span>0</span>4
      </Title>
      <SubTitle>Not Found</SubTitle>
      <Text>the resource requested could not be found on this server!</Text>
    </Container>
  );
};

export default NotFound;
