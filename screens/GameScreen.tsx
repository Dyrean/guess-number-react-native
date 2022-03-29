import React, { useState, useEffect } from 'react';
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

enum Direction {
  Lower = 'Lower',
  Greater = 'Greater',
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ route, navigation }: Props) => {
  const { number } = route.params;
  const initialGuessNumber = generateRandomBetween(minBoundary, maxBoundary, number);
  const [currentGuess, setCurrentGuess] = useState(initialGuessNumber);

  useEffect(() => {
    if (currentGuess === number) {
      navigation.navigate('GameOverScreen', { number });
    }
  }, [currentGuess, number, navigation]);

  function nextGuessNumber(direction: Direction) {
    if (
      (direction === Direction.Lower && currentGuess < number) ||
      (direction === Direction.Greater && currentGuess > number)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {
          text: 'Sorry',
          style: 'cancel',
        },
      ]);
      return;
    } else if (maxBoundary <= minBoundary) {
      Alert.alert('Game Error', 'The numbers to check ended', [
        {
          text: 'Sorry',
          style: 'cancel',
        },
      ]);
      setCurrentGuess(initialGuessNumber);
      minBoundary = 1;
      maxBoundary = 100;
    }
    if (direction === Direction.Lower) {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    console.log(newGuess);
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
              <NumberContainer>{currentGuess}</NumberContainer>
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
