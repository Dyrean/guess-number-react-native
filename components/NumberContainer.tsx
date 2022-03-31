import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

type Props = {
  children: React.ReactChild;
};

const NumberContainer = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent500,
    fontSize: 32,
    fontFamily: 'open-sans-bold',
  },
});
