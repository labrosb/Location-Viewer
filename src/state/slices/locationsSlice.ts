import {createSlice} from '@reduxjs/toolkit';
import {Location} from '../../@models/location';

const initialState = [] as Location[];

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations: (_, action) => action.payload,
  },
});

export const {setLocations} = locationsSlice.actions;
export default locationsSlice.reducer;
