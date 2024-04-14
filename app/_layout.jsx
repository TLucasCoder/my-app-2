import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot, Stack} from 'expo-router'
import {useFonts} from 'expo-font'
import {useEffect} from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { Tabs } from 'expo-router';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


const RooyLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
   useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>)
  
}

export default RooyLayout
