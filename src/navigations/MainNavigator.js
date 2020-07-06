import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen, CardDetailScreen, CardSearchScreen} from '../screens';
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="CardDetail" component={CardDetailScreen} />
      <Stack.Screen name="CardSearch" component={CardSearchScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
