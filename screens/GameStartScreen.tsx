import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Button from '../components/Button';

function GameStartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Guess My Number</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          maxLength={2}
          selectionColor="yellow"
          keyboardType="number-pad"
        />
        <Button onPress={() => console.log('Button')}>Reset</Button>
        <Button onPress={() => console.log('Button')}>Confirm</Button>
      </View>
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  inputContainer: {
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
    alignItems: 'center',
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
});
