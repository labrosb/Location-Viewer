import React from 'react';
import LocationDetails from '../components/LocationDetails';
import type {Location} from '../@models/location';

type Route = {
  route: {
    params: {location: Location};
  };
};

const LocationDetailsScreen: React.FC<Route> = ({route}) => {
  const {location} = route.params;
  return <LocationDetails location={location} />;
};

export default LocationDetailsScreen;
