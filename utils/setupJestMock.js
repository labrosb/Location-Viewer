import React from 'react';

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    getItem: async (...args) => args,
    setItem: async (...args) => args,
    removeItem: async (...args) => args,
  };
});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

jest.mock('react-native-maps', () => {
  const {View} = require('react-native');
  const MockMapView = ({children, ...props}) => (
    <View {...props}>{children}</View>
  );
  const MockMarker = ({children, ...props}) => (
    <View {...props}>{children}</View>
  );
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
    PROVIDER_GOOGLE: 'google',
  };
});

jest.mock('react-navigation-shared-element', () => {
  const {View} = require('react-native');
  const SharedElement = ({children, ...props}) => (
    <View {...props}>{children}</View>
  );
  return {
    SharedElement,
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
