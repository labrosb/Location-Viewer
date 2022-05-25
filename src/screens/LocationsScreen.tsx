import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from '../state/store';
import londonLocations from '../datasets/londonLandmarks.json';
import {setLocations} from '../state/slices/locationsSlice';
import {selectAverageLocation} from '../state/selectors/locationSelectors';
import LocationsMap from '../components/Locations/LocationsMap';
import LocationsList from '../components/Locations/LocationsList';
import type {LocationWithIndex} from '../@models/location';

const LocationsScreen: React.FC = () => {
  const dispatch = useDispatch();
  /* Retrieving from state here to distribute to the children */
  const locations = useSelector(state => state.locations);
  const favorites = useSelector(state => state.favorites);
  const regionLatlng = useSelector(selectAverageLocation);

  const [selectedLocation, setSelectedLocation] = useState<LocationWithIndex>();

  useEffect(() => {
    dispatch(setLocations(londonLocations));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onLocationSelected = (location: LocationWithIndex): void => {
    setSelectedLocation(location);
  };

  return (
    <>
      <LocationsMap
        selectedLocationId={selectedLocation?.id}
        {...{
          regionLatlng,
          locations,
          favorites,
          onLocationSelected,
        }}
      />
      <LocationsList
        selectedLocationIndex={selectedLocation?.index}
        {...{
          locations,
          favorites,
        }}
      />
    </>
  );
};

export default LocationsScreen;
