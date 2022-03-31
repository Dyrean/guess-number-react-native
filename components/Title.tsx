import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactChild;
};

const Title = ({ children }: Props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'open-sans-bold',
  },
});
