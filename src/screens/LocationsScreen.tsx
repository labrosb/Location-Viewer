import React, {useEffect} from 'react';
import {useDispatch, useSelector} from '../state/store';
import londonLocations from '../datasets/londonLandmarks.json';
import {setLocations} from '../state/slices/locationsSlice';
import LocationsMap from '../components/Locations/LocationsMap';
import LocationsList from '../components/Locations/LocationsList';

const LocationsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const locations = useSelector(state => state.locations);

  useEffect(() => {
    dispatch(setLocations(londonLocations));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LocationsMap {...{locations}} />
      <LocationsList locations={locations} />
    </>
  );
};

export default LocationsScreen;
