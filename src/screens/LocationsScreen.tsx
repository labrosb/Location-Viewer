import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from '../state/store';
import londonLocations from '../datasets/londonLandmarks.json';
import {Location} from '../@models/location';
import {setLocations} from '../state/slices/locationsSlice';
import {selectAverageLocation} from '../state/selectors/locationSelectors';
import LocationsMap from '../components/Locations/LocationsMap';
import LocationsList from '../components/Locations/LocationsList';

const LocationsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const locations = useSelector(state => state.locations);
  const favorites = useSelector(state => state.favorites);
  const regionLatlng = useSelector(selectAverageLocation);

  const [selectedLocation, setSelectedLocation] = useState<Location>();

  useEffect(() => {
    dispatch(setLocations(londonLocations));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLocationSelected = (location: Location): void => {
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
          selectedLocation,
          onLocationSelected,
        }}
      />
      <LocationsList locations={locations} />
    </>
  );
};

export default LocationsScreen;
