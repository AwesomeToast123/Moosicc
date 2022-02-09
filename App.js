import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Musicplayer from './Screens/Musicplayer';

TrackPlayer.registerPlaybackService(() => require('./service'));

export default function App() {
  return (
      <Musicplayer />
  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
