import { View, Text, StyleSheet, ImageBackground, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Colors from '../constants/colors';
import Title from '../components/Title';
import Button from '../components/Button';

type Props = {
  route: any;
  navigation: any;
};

const GameOverScreen = ({ route, navigation }: Props) => {
  const { totalGuess } = route.params;
  const { guessNumber } = route.params;

  function handleNewGame() {
    navigation.popToTop();
  }

  return (
    <>
      <LinearGradient colors={[Colors.accent, Colors.primary400]} style={styles.rootScreen}>
        <ImageBackground
          source={require('../assets/images/dice-background.jpg')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            <Title>Game Over!</Title>
            <View style={styles.successImage}>
              <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>
            <View>
              <Text style={styles.guessText}>
                Your phone needed <Text style={styles.highlight}>{totalGuess}</Text> rounds to guess
                the number <Text style={styles.highlight}>{guessNumber}</Text>
              </Text>
              <Button onPress={handleNewGame}>Start New Game</Button>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  );
};

export default GameOverScreen;

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
  successImage: {
    margin: 20,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: 'hidden',
    width: 300,
    height: 300,
  },
  guessText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 4,
    marginBottom: 4,
    color: 'white',
    fontFamily: 'open-sans',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
  },
});
