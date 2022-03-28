import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/Button';

function GameStartScreen() {
  return (
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
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={() => console.log('Button')}>Reset</Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => console.log('Button')}>Confirm</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
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
