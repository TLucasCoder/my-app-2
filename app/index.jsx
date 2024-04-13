import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color:'blue'}}>Go to prof</Link>
    </View>
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
