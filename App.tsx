import React from 'react';
import { StatusBar } from 'expo-status-bar';
import GameStartScreen from './screens/GameStartScreen';

export default function App() {
  return (
    <>
      <GameStartScreen />
      <StatusBar style="light" />
    </>
  );
}
