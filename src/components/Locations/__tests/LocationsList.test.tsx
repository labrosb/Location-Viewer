import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import londonLocations from '../../../datasets/londonLandmarks.json';
import locationsReducer from '../../../state/slices/locationsSlice';
import LocationsList from '../LocationsList';

const store = configureStore({reducer: {favorites: locationsReducer}});
// @ts-ignore
const wrapper = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

afterEach(() => jest.resetAllMocks());

describe('<Locations List>', () => {
  it('should render as many list items as the locations prop length', () => {
    const layout = render(
      <LocationsList locations={londonLocations} favorites={{}} />,
      {wrapper},
    );
    const locationItems = layout.getAllByTestId('location-item');

    expect(locationItems).toHaveLength(londonLocations.length);
  });
});
