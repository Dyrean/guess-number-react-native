import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  GestureResponderEvent,
  Alert,
  ImageBackground,
} from 'react-native';
import Button from '../components/Button';

interface Props {
  navigation: any;
}

function GameStartScreen({ navigation }: Props) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function handleNumberInput(number: string) {
    setEnteredNumber(number);
  }

  function resetEnteredNumber() {
    setEnteredNumber('');
  }

  function handleConfirmButton(event: GestureResponderEvent) {
    event.preventDefault();
    const number = Number(enteredNumber);
    if (isNaN(number) || number <= 0 || number >= 99) {
      Alert.alert('Invalid number!', 'Number has to be number between 1 and 99', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetEnteredNumber,
        },
      ]);
      return;
    }
    navigation.navigate('GameScreen', { number });
    console.log(`Valid number. ${number}`);
  }

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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Guess My Number</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                maxLength={2}
                selectionColor="yellow"
                keyboardType="number-pad"
                value={enteredNumber}
                onChangeText={handleNumberInput}
              />
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <Button onPress={resetEnteredNumber}>Reset</Button>
                </View>
                <View style={styles.buttonContainer}>
                  <Button onPress={handleConfirmButton}>Confirm</Button>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>

      <StatusBar style="light" />
    </>
  );
}

export default GameStartScreen;

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
  titleContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 24,
    backgroundColor: '#4e0429',
    borderRadius: 16,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    shadowOpacity: 0.25,
    width: 300,
    marginTop: 20,
  },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: 'yellow',
    borderBottomWidth: 2,
    color: 'yellow',
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
