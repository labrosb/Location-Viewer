import React from 'react';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';
import londonLocations from '../../datasets/londonLandmarks.json';
import locationsReducer from '../../state/slices/locationsSlice';
import favoriteLocationsReducer from '../../state/slices/favoriteLocationsSlice';
import LocationsScreen from '../LocationsScreen';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

const reducer = combineReducers({
  locations: locationsReducer,
  favorites: favoriteLocationsReducer,
});

let store: any;
let wrapper: any;

describe('<Integration Tests: Locations Screen>', () => {
  beforeEach(() => {
    store = configureStore({reducer});
    // @ts-ignore
    wrapper = ({children}) => {
      return <Provider store={store}>{children}</Provider>;
    };
  });
  afterEach(() => jest.resetAllMocks());

  it('Should auto scroll to list item when clicking map marker', async () => {
    const layout = render(<LocationsScreen />, {wrapper});
    const mapMarkers = layout.getAllByTestId('map-marker');
    const lastLocation = londonLocations.length - 1;
    const lastLocationMarker = mapMarkers[lastLocation];

    await fireEvent.press(lastLocationMarker);

    const list = layout.getByTestId('locations-list');
    const scrollIndex = list.props.scrollToIndex;

    expect(scrollIndex).toEqual(lastLocation);
  });

  it('Should add heart icon to map marker when adding to favorites from the list', async () => {
    const layout = render(<LocationsScreen />, {wrapper});
    // Heart buttons on the list
    const locationHeartButtons = layout.getAllByTestId('heart-button-icon');
    const currentHeartButton = locationHeartButtons[0];

    await fireEvent.press(currentHeartButton, {
      preventDefault: () => null,
    });

    const MarkerHearts = layout.getAllByTestId('heart-icon');

    expect(MarkerHearts.length).toBe(1);
  });

  it('Should add favorite location to favorites state', async () => {
    const index = 1;
    const layout = render(<LocationsScreen />, {wrapper});

    const locationHeartButtons = layout.getAllByTestId('heart-button-icon');
    const currentHeartButton = locationHeartButtons[index];

    await fireEvent.press(currentHeartButton, {
      preventDefault: () => null,
    });

    const favoritesState = store.getState().favorites;
    const {id, ...rest} = londonLocations[index];
    const expectedState = {[id]: {...rest}};

    expect(favoritesState).toEqual(expectedState);
  });

  it('Should change marker color on click', async () => {
    const index = 1;
    const layout = render(<LocationsScreen />, {wrapper});

    const mapMarkers = layout.getAllByTestId('map-marker');
    const currentMarker = mapMarkers[index];

    const locationIcon = layout.getAllByTestId('location-icon');
    const iconColor = locationIcon[index].props.style[0].color;

    await fireEvent.press(currentMarker);

    const newIconColor = locationIcon[index].props.style[0].color;

    expect(iconColor).not.toEqual(newIconColor);
  });

  it('should redirect with correct params on list location click', async () => {
    const index = 1;
    const layout = render(<LocationsScreen />, {wrapper});

    const locationItems = layout.getAllByTestId('location-item');
    const currentLocationItem = locationItems[index];

    await fireEvent.press(currentLocationItem, {
      preventDefault: () => null,
    });

    expect(mockedNavigate).toHaveBeenCalledWith('LocationDetails', {
      location: londonLocations[index],
    });
  });
});
