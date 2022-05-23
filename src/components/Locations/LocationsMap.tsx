import React from 'react';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {faLocationDot, faHeart} from '@fortawesome/free-solid-svg-icons';
import {AverageLocation} from '../../state/selectors/locationSelectors';
import {Location} from '../../@models/location';
import type {Favorites} from '../../state/slices/favoriteLocationsSlice';
import {Map, PinContainer, HeartIcon, LocationIcon} from './LocationsMap.UI';

type Props = {
  regionLatlng: AverageLocation;
  locations: Location[];
  favorites: Favorites;
  selectedLocationId?: number;
  onLocationSelected: (location: Location) => void;
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
      {locations.map(location => (
        <Marker
          key={location.id}
          coordinate={{
            latitude: location.latlng.latitude,
            longitude: location.latlng.longitude,
          }}
          onPress={() => onLocationSelected(location)}>
          <PinContainer>
            {!!favorites[location.id] && <HeartIcon size={25} icon={faHeart} />}
            <LocationIcon
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
