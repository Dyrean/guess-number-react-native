import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, Alert } from 'react-native';
import Button from '../components/Button';
import Title from '../components/Title';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

function generateRandomBetween(min: number, max: number, exclude: number): number {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  return rndNumber === exclude ? generateRandomBetween(min, max, exclude) : rndNumber;
}

type Props = {
  route: any;
  navigation: any;
};

const Direction = {
  Lower: 'Lower',
  Greater: 'Greater',
};

type Guess = {
  number: number;
  minBoundary: number;
  maxBoundary: number;
};

const GameScreen = ({ route }: Props) => {
  const { number } = route.params;
  const initialGuessNumber = {
    minBoundary: 1,
    maxBoundary: 100,
    number: generateRandomBetween(1, 100, number),
  };
  const [currentGuess, setCurrentGuess] = useState<Guess>(initialGuessNumber);

  function nextGuessNumber(direction: string) {
    if (
      (direction === Direction.Lower && currentGuess.number < number) ||
      (direction === Direction.Greater && currentGuess.number > number)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {
          text: 'Sorry',
          style: 'cancel',
        },
      ]);
      return;
    }
    let newGuess = currentGuess;
    if (direction === Direction.Lower) {
      newGuess.maxBoundary = currentGuess.number - 1;
    } else {
      newGuess.minBoundary = currentGuess.number + 1;
    }
    newGuess.number = generateRandomBetween(
      newGuess.minBoundary,
      newGuess.maxBoundary,
      currentGuess.number,
    );
    setCurrentGuess(newGuess);
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
            <View style={styles.screen}>
              <Title>Opponent's Guess</Title>
              <NumberContainer>{currentGuess.number}</NumberContainer>
              <View>
                <Text>Higher or Lower?</Text>
                <View>
                  <View>
                    <Button onPress={nextGuessNumber.bind(this, Direction.Greater)}>+</Button>
                  </View>
                  <View>
                    <Button onPress={nextGuessNumber.bind(this, Direction.Lower)}>-</Button>
                  </View>
                </View>
              </View>
              <View />
            </View>
          </SafeAreaView>
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
  screen: {
    flex: 1,
    padding: 12,
  },
});
