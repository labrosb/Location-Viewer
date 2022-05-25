import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';
import londonLocations from '../../../datasets/londonLandmarks.json';
import favoriteLocationsReducer from '../../../state/slices/favoriteLocationsSlice';
import LocationsDetails from '..';

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    goBack: mockedGoBack,
  }),
}));

const store = configureStore({reducer: {favorites: favoriteLocationsReducer}});
// @ts-ignore
const wrapper = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

describe('Location Details>', () => {
  afterEach(() => jest.resetAllMocks());

  it('Should add favorite location to favorites state on heart click', async () => {
    const index = 1;
    const layout = render(
      <LocationsDetails location={londonLocations[index]} />,
      {wrapper},
    );

    const locationHeartButton = layout.getByTestId('heart-button-icon');

    await fireEvent.press(locationHeartButton, {
      preventDefault: () => null,
    });

    const favoritesState = store.getState().favorites;
    const {id, ...rest} = londonLocations[index];
    const expectedState = {[id]: {...rest}};

    expect(favoritesState).toEqual(expectedState);
  });

  it('Should call goBack function on back button click', async () => {
    const index = 1;
    const layout = render(
      <LocationsDetails location={londonLocations[index]} />,
      {wrapper},
    );
    const locationHeartButton = layout.getByTestId('details-back-button');
    await fireEvent.press(locationHeartButton, {
      preventDefault: () => null,
    });

    expect(mockedGoBack).toHaveBeenCalledTimes(1);
  });
});
