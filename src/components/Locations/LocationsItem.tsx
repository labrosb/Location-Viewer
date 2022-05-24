import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {
  Container,
  Content,
  HeartButton,
  TitleContainer,
  Title,
} from './LocationsItem.UI';

import type {Location} from '../../@models/location';

type Props = {
  item: Location;
  isFavorite: boolean;
  onItemClick: (ev: GestureResponderEvent, item: Location) => void;
  onFavoriteClick: (ev: GestureResponderEvent, item: Location) => void;
};

const LocationItem: React.FC<Props> = ({
  item,
  isFavorite,
  onItemClick,
  onFavoriteClick,
}) => {
  return (
    <Container onPress={ev => onItemClick(ev, item)}>
      <Content resizeMode="cover" source={{uri: item.image}}>
        <HeartButton
          buttonSize={34}
          iconSize={18}
          isActive={isFavorite}
          onPress={ev => onFavoriteClick(ev, item)}
        />
        <TitleContainer>
          <Title>{item.name}</Title>
        </TitleContainer>
      </Content>
    </Container>
  );
};

export default LocationItem;
