import React from 'react';
import {ScrollView, GestureResponderEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from '../../state/store';
import {
  addFavorite,
  removeFavorite,
} from '../../state/slices/favoriteLocationsSlice';
import {
  ImageContent,
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

const LocationDetails: React.FC<Props> = ({location}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const navigation = useNavigation<LocationDetailsNavigationProp>();

  const isFavorite = !!favorites[location.id];

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
      <ImageContent resizeMode="cover" source={{uri: location.image}}>
        <HeartButton
          buttonSize={56}
          iconSize={28}
          isActive={isFavorite}
          onPress={onFavoriteClick}
        />
        <BackButton testID="details-back-button" onPress={navigation.goBack}>
          <BackButtonIcon size={40} icon={faAngleDown} />
        </BackButton>
      </ImageContent>
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
