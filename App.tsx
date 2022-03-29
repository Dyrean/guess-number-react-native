import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameScreen from './screens/GameScreen';
import GameStartScreen from './screens/GameStartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GameStartScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GameStartScreen" component={GameStartScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
