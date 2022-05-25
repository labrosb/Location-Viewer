import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {ScrollView, GestureResponderEvent} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from '../../state/store';
import {
  addFavorite,
  removeFavorite,
} from '../../state/slices/favoriteLocationsSlice';
import useFlipAnimation from '../../hooks/useFlipAnimation';
import HeartButton from '../Common/HeartButton';
import {
  TopContainer,
  ButtonsContainer,
  Image,
  HeartButtonContainer,
  BackButton,
  BackButtonIcon,
  DetailsContainer,
  TitleContainer,
  Title,
  DetailsText,
} from './LocationDetails.UI';

import type {LocationDetailsNavigationProp} from '../../navigation/types';
import type {Location} from '../../@models/location';

type Props = {location: Location};

export const FadeContainer = Animated.createAnimatedComponent(ButtonsContainer);
export const FlipContainer =
  Animated.createAnimatedComponent(HeartButtonContainer);

const LocationDetails: React.FC<Props> = ({location}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const navigation = useNavigation<LocationDetailsNavigationProp>();

  const fadeValue = useRef(new Animated.Value(0));
  // If is in favorites
  const isFavorite = !!favorites[location.id];

  const {play, animationStyles} = useFlipAnimation({startFlipped: isFavorite});

  useEffect(() => {
    Animated.timing(fadeValue.current, {
      toValue: 1,
      duration: 800,
      delay: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const onFavoriteClick = (ev: GestureResponderEvent): void => {
    ev.preventDefault();
    play();
    const {id} = location;
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(location));
    }
  };

  return (
    <ScrollView>
      <TopContainer>
        <SharedElement id={`image-${location.id}`}>
          <Image resizeMode="cover" source={{uri: location.image}} />
        </SharedElement>
        <FadeContainer style={{opacity: fadeValue.current}}>
          <FlipContainer style={animationStyles}>
            <HeartButton
              buttonSize={56}
              iconSize={28}
              isActive={isFavorite}
              onPress={onFavoriteClick}
            />
          </FlipContainer>
          <BackButton testID="details-back-button" onPress={navigation.goBack}>
            <BackButtonIcon size={40} icon={faAngleDown} />
          </BackButton>
        </FadeContainer>
      </TopContainer>
      <TitleContainer>
        <Title>{location.name}</Title>
      </TitleContainer>
      <DetailsContainer>
        <DetailsText>{location.description}</DetailsText>
      </DetailsContainer>
    </ScrollView>
  );
};

export default LocationDetails;
