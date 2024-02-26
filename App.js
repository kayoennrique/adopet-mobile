import 'react-native-gesture-handler';
import React from 'react';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Navigation from './src/routes/navigation';
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    "PoppinsRegular": Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Navigation />
  );
}