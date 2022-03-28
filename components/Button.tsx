import React, { ReactChild } from 'react';
import { Text, View, Pressable, GestureResponderEvent, StyleSheet } from 'react-native';

type Props = {
  children: ReactChild;
  onPress: (event: GestureResponderEvent) => void;
};

function Button({ children, onPress }: Props) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: '#3f0120' }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 15,
    margin: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: '#5e1439',
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
