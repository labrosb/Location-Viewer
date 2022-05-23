import React from 'react';
import {Container, Content, TitleContainer, Title} from './LocationsItem.UI';
import type {Location} from '../../@models/location';

type Props = {item: Location};

const LocationItem: React.FC<Props> = ({item}) => {
  return (
    <Container>
      <Container>
        <Content resizeMode="cover" source={{uri: item.image}}>
          <TitleContainer>
            <Title>{item.name}</Title>
          </TitleContainer>
        </Content>
      </Container>
    </Container>
  );
};

export default LocationItem;
