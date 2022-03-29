import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

type Props = {
  number: number;
  index: number;
};

const GuessText = ({ number, index }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>#{index}</Text>
      <Text style={styles.textContainer}>Opponent's Guess: {number}</Text>
    </View>
  );
};

export default GuessText;

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: Colors.accent500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  textContainer: {
    fontFamily: 'open-sans',
  },
});
