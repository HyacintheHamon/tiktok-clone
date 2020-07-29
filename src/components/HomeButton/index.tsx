import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, Button } from './styles';

interface Props {
  home: boolean;
}

const HomeButton: React.FC<Props> = ({ home }) => {
  return (
    <Container home={home}>
      <Button>
        <Icon name="plus" size={18} color={home ? '#000' : '#fff'} />
      </Button>
    </Container>
  );
};

export default HomeButton;
