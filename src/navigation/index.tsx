import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import LocationsScreen from '../screens/LocationsScreen';
import LocationDetailsScreen from '../screens/LocationDetailsScreen';

const Stack = createSharedElementStackNavigator();

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
        sharedElements={(route, otherRoute, showing) => {
          if (otherRoute.name === 'Locations' && showing) {
            return [`image-${route.params.location.id}`];
          }
        }}
        options={{
          headerShown: false,
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {opacity: progress},
          }),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
