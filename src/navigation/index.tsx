import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LocationsScreen from '../screens/LocationsScreen';
import LocationDetailsScreen from '../screens/LocationDetailsScreen';

const Stack = createStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Locations" component={LocationsScreen} />
      <Stack.Screen name="LocationDetails" component={LocationDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
