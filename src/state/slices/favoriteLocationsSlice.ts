import {createSlice} from '@reduxjs/toolkit';
import {Location} from '../../@models/location';

type Favorites = Record<string, Exclude<Location, 'id'>>;

const initialState = {} as Favorites;

const favoriteLocationsSlice = createSlice({
  name: 'favoriteLocations',
  initialState,
  reducers: {
    addFavorite: (state, action) => {

    },
    removeFavorite: (state, action) => {

    },
  },
});

export const {addFavorite, removeFavorite} = favoriteLocationsSlice.actions;
export default favoriteLocationsSlice.reducer;
