import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import londonLocations from '../../../datasets/londonLandmarks.json';
import LocationsMap from '../LocationsMap';
import type {Favorites} from '../../../state/slices/favoriteLocationsSlice';

type MockedComponent = {
  favorites?: Favorites;
  selectedLocationId?: number;
  onLocationSelected?: typeof jest.fn;
};

const MockedOnLocationSelected = jest.fn();

const MockedLocationsMap = ({
  favorites,
  selectedLocationId,
  onLocationSelected,
}: MockedComponent) => (
  <LocationsMap
    regionLatlng={londonLocations[0].latlng}
    locations={londonLocations}
    favorites={favorites || {}}
    selectedLocationId={selectedLocationId}
    onLocationSelected={onLocationSelected || MockedOnLocationSelected}
  />
);

afterEach(() => jest.resetAllMocks());

describe('<Map Markers>', () => {
  it('should render as many markers as the locations prop length', () => {
    const layout = render(<MockedLocationsMap />);
    const mapMarkers = layout.getAllByTestId('map-marker');

    expect(mapMarkers).toHaveLength(londonLocations.length);
  });

  it('Should call callback function with correct params on marker click', async () => {
    const index = 0;
    const MockedonLocationSelected = jest.fn();
    const layout = render(
      <MockedLocationsMap onLocationSelected={MockedonLocationSelected} />,
    );
    const mapMarkers = layout.getAllByTestId('map-marker');

    const currentMarker = mapMarkers[index];
    await fireEvent.press(currentMarker);

    const params = {...londonLocations[index], index};

    expect(MockedonLocationSelected).toHaveBeenCalledWith(params);
  });

  it('Should switch icon color when retrieving selectLocationId prop', () => {
    const index = 0;
    const layout = render(<MockedLocationsMap />);

    const locationIcon = layout.getAllByTestId('location-icon');
    const iconColor = locationIcon[index].props.style[0].color;

    layout.rerender(<MockedLocationsMap selectedLocationId={1} />);

    const newIconColor = locationIcon[index].props.style[0].color;

    expect(iconColor).not.toEqual(newIconColor);
  });

  it('Should show heart icon if location is in favorites prop', () => {
    const {id, ...restLocation} = londonLocations[0];
    const favorites = {[id.toString()]: {...restLocation}};
    // @ts-ignore -> For some reason it doesn't understand the type
    const layout = render(<MockedLocationsMap favorites={favorites} />);
    const heartIcon = layout.getAllByTestId('heart-icon');

    // Checks if it has exactly 1 heart
    expect(heartIcon.length).toBe(1);
  });
});
