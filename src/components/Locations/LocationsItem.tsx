import React from 'react';
import {Animated, GestureResponderEvent} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import useFlipAnimation from '../../hooks/useFlipAnimation';
import HeartButton from '../Common/HeartButton';
import {
  Container,
  Image,
  HeartButtonContainer,
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

export const AnimatedContainer =
  Animated.createAnimatedComponent(HeartButtonContainer);

const LocationItem: React.FC<Props> = ({
  item,
  isFavorite,
  onItemClick,
  onFavoriteClick,
}) => {
  const {play, animationStyles} = useFlipAnimation({startFlipped: isFavorite});

  const onHeartButtonClick = (ev: GestureResponderEvent): void => {
    play();
    onFavoriteClick(ev, item);
  };

  return (
    <Container testID="location-item" onPress={ev => onItemClick(ev, item)}>
      <SharedElement id={`image-${item.id}`}>
        <Image resizeMode="cover" source={{uri: item.image}} />
      </SharedElement>
      <AnimatedContainer style={animationStyles}>
        <HeartButton
          buttonSize={34}
          iconSize={18}
          isActive={isFavorite}
          onPress={onHeartButtonClick}
        />
      </AnimatedContainer>
      <TitleContainer>
        <Title>{item.name}</Title>
      </TitleContainer>
    </Container>
  );
};

export default LocationItem;
