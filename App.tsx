import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import GameScreen from './screens/GameScreen';
import GameStartScreen from './screens/GameStartScreen';
import GameOverScreen from './screens/GameOverScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GameStartScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GameStartScreen" component={GameStartScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="GameOverScreen" component={GameOverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
