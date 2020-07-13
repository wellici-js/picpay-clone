import React from 'react';

import { Container, Option, Img, Label } from './styles';

const items = [
  {
    key: '1',
    img: require('../../images/01.png'),
    label: 'Recarga',
  },
  {
    key: '2',
    img: require('../../images/02.png'),
    label: 'Uber',
  },
  {
    key: '3',
    img: require('../../images/03.png'),
    label: 'Ônibus',
  },
  {
    key: '4',
    img: require('../../images/04.png'),
    label: 'TV',
  },
  {
    key: '5',
    img: require('../../images/05.png'),
    label: 'Doações',
  },
  {
    key: '6',
    img: require('../../images/06.png'),
    label: 'Barras',
  },
  {
    key: '7',
    img: require('../../images/07.png'),
    label: 'FAQ',
  },
];

const Suggestions: React.FC = () => {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key}>
          <Img source={item.img} />

          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
};

export default Suggestions;
