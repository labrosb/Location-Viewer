import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Locations: undefined;
  LocationDetails: undefined;
};

export type LocationsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Locations'
>;

export type LocationDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LocationDetails'
>;
