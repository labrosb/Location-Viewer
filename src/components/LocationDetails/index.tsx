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
import {
  TopContainer,
  ButtonsContainer,
  Image,
  HeartButton,
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

export const AnimatedButtons =
  Animated.createAnimatedComponent(ButtonsContainer);

const LocationDetails: React.FC<Props> = ({location}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const navigation = useNavigation<LocationDetailsNavigationProp>();

  const fadeValue = useRef(new Animated.Value(0));

  const isFavorite = !!favorites[location.id];

  useEffect(() => {
    Animated.timing(fadeValue.current, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const onFavoriteClick = (ev: GestureResponderEvent): void => {
    ev.preventDefault();
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
        <AnimatedButtons style={{opacity: fadeValue.current}}>
          <HeartButton
            buttonSize={56}
            iconSize={28}
            isActive={isFavorite}
            onPress={onFavoriteClick}
          />
          <BackButton testID="details-back-button" onPress={navigation.goBack}>
            <BackButtonIcon size={40} icon={faAngleDown} />
          </BackButton>
        </AnimatedButtons>
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
