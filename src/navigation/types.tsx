import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {Location} from '../@models/location';

type RootStackParamList = {
  Locations: undefined;
  LocationDetails: {location: Location};
};

export type LocationsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Locations'
>;

export type LocationDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LocationDetails'
>;
