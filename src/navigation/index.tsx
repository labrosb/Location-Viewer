import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LocationsScreen from '../screens/LocationsScreen';
import LocationDetailsScreen from '../screens/LocationDetailsScreen';

const Stack = createStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Locations"
        component={LocationsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
