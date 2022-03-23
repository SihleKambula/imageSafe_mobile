import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthScreen from './screens/auth/AuthScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
