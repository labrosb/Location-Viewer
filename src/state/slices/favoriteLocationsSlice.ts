import {createSlice} from '@reduxjs/toolkit';
import {Location} from '../../@models/location';

export type Favorites = Record<string, Exclude<Location, 'id'>>;

const initialState = {} as Favorites;

const favoriteLocationsSlice = createSlice({
  name: 'favoriteLocations',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const {id, ...restLocation} = action.payload;
      state[id] = restLocation;
    },
    removeFavorite: (state, action) => {
      const id = action.payload;
      delete state[id];
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteLocationsSlice.actions;
export default favoriteLocationsSlice.reducer;
