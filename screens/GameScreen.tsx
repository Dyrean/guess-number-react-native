import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

type Props = {
  route: any;
  navigation: any;
};

const GameScreen = ({ route }: Props) => {
  const { number } = route.params;
  return (
    <>
      <LinearGradient colors={['orange', '#4e0429']} style={styles.rootScreen}>
        <ImageBackground
          source={require('../assets/images/dice-background.jpg')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <View>
            <Text>{number}</Text>
          </View>
        </ImageBackground>
      </LinearGradient>

      <StatusBar style="light" />
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
