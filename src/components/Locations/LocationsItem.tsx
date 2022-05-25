import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {
  Container,
  Image,
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
    <Container testID="location-item" onPress={ev => onItemClick(ev, item)}>
      <SharedElement id={`image-${item.id}`}>
        <Image resizeMode="cover" source={{uri: item.image}} />
      </SharedElement>
      <HeartButton
        buttonSize={34}
        iconSize={18}
        isActive={isFavorite}
        onPress={ev => onFavoriteClick(ev, item)}
      />
      <TitleContainer>
        <Title>{item.name}</Title>
      </TitleContainer>
    </Container>
  );
};

export default LocationItem;
