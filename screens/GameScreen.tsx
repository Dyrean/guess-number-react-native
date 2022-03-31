import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Alert,
  FlatList,
} from 'react-native';
import Button from '../components/Button';
import Title from '../components/Title';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import GuessText from '../components/GuessText';

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
  const [guessArray, setGuessArray] = useState([initialGuessNumber]);

  useEffect(() => {
    if (currentGuess === number) {
      navigation.navigate('GameOverScreen', { guessNumber: number, totalGuess: guessArray.length });
    }
  }, [currentGuess, number, navigation, guessArray.length]);

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
    }
    if (direction === Direction.Lower) {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    console.log(`maxBoundary: ${maxBoundary} , minBoundary: ${minBoundary}`);
    const newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
    setGuessArray((previousGuessArray) => [newGuess, ...previousGuessArray]);
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
              <View style={styles.inputContainer}>
                <Text style={styles.text}>Higher or Lower?</Text>
                <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                    <Button onPress={nextGuessNumber.bind(this, Direction.Greater)}>
                      <Ionicons name="add-circle-outline" size={24} color="white" />
                    </Button>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button onPress={nextGuessNumber.bind(this, Direction.Lower)}>
                      <Ionicons name="remove-circle-outline" size={24} color="white" />
                    </Button>
                  </View>
                </View>
              </View>
              <View style={styles.guessList}>
                <FlatList
                  data={guessArray}
                  renderItem={(itemData) => (
                    <GuessText index={guessArray.length - itemData.index} number={itemData.item} />
                  )}
                  keyExtractor={(item) => String(item)}
                />
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
    marginTop: 50,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 24,
    backgroundColor: Colors.primary400,
    borderRadius: 16,
    elevation: 10,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    shadowOpacity: 0.25,
    width: 300,
    marginVertical: 20,
  },
  text: {
    fontSize: 26,
    marginBottom: 12,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  guessList: {
    flexDirection: 'column',
    marginVertical: 4,
  },
});
