import React from 'react';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {faLocationDot, faHeart} from '@fortawesome/free-solid-svg-icons';
import {AverageLocation} from '../../state/selectors/locationSelectors';
import {Map, PinContainer, HeartIcon, LocationIcon} from './LocationsMap.UI';
import type {Location, LocationWithIndex} from '../../@models/location';
import type {Favorites} from '../../state/slices/favoriteLocationsSlice';

type Props = {
  regionLatlng: AverageLocation;
  locations: Location[];
  favorites: Favorites;
  selectedLocationId?: number;
  onLocationSelected: (location: LocationWithIndex) => void;
};

const LocationsMap: React.FC<Props> = ({
  regionLatlng,
  locations,
  favorites,
  selectedLocationId,
  onLocationSelected,
}) => {
  const region = {
    latitude: regionLatlng.latitude,
    longitude: regionLatlng.longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  return (
    <Map provider={PROVIDER_GOOGLE} initialRegion={region}>
      {locations.map((location, index) => (
        <Marker
          testID="map-marker"
          key={location.id}
          coordinate={{
            latitude: location.latlng.latitude,
            longitude: location.latlng.longitude,
          }}
          onPress={() => onLocationSelected({...location, index})}>
          <PinContainer>
            {!!favorites[location.id] && (
              <HeartIcon testID="heart-icon" size={25} icon={faHeart} />
            )}
            <LocationIcon
              testID="location-icon"
              $isSelected={selectedLocationId === location.id}
              size={55}
              icon={faLocationDot}
            />
          </PinContainer>
        </Marker>
      ))}
    </Map>
  );
};

export default LocationsMap;
