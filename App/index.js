import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthScreen from './screens/auth/AuthScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
