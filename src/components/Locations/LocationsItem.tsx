import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {
  Container,
  Content,
  HeartContainer,
  HeartIcon,
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
  const icon = isFavorite ? faHeartSolid : faHeart;

  return (
    <Container onPress={ev => onItemClick(ev, item)}>
      <Content resizeMode="cover" source={{uri: item.image}}>
        <HeartContainer onPress={ev => onFavoriteClick(ev, item)}>
          <HeartIcon size={18} icon={icon} />
        </HeartContainer>
        <TitleContainer>
          <Title>{item.name}</Title>
        </TitleContainer>
      </Content>
    </Container>
  );
};

export default LocationItem;
