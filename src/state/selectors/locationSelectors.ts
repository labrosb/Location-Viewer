import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Location} from '../../@models/location';

export type AverageLocation = {
  latitude: number;
  longitude: number;
};

export const selectAverageLocation = createSelector(
  (state: RootState) => state.locations,
  locations =>
    locations.reduce(
      (total: AverageLocation, current: Location, index: number) => {
        total.latitude = total.latitude + current.latlng.latitude;
        total.longitude = total.longitude + current.latlng.longitude;
        if (index + 1 === locations.length) {
          total.latitude = total.latitude / locations.length;
          total.longitude = total.longitude / locations.length;
        }
        return total;
      },
      {latitude: 0, longitude: 0},
    ),
);
