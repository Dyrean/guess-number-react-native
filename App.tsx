import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import GameStartScreen from './screens/GameStartScreen';

export default function App() {
  return (
    <>
      <LinearGradient colors={['orange', '#4e0429']} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/dice-background.jpg')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <GameStartScreen />
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  );
}

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
});
