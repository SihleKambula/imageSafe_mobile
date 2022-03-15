react navigation
--- 
yarn add @react-navigation / native



// navigation dependencies
yarn add react - native - screens react - native - safe - area - context

// Android mainfest
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}

import android.os.Bundle;


// wrap app
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}

//install native stack
yarn add @react-navigation / native - stack


//react elements
yarn add react-native-elements


//icons
yarn add react - native - vector - icons

//safe-area
yarn add react-native-safe-area-context

//app setup
import { SafeAreaProvider } from **'react-native-safe-area-context';

function App() {
  return <SafeAreaProvider>...</SafeAreaProvider>;
}

//firebase
yarn add @react-native-firebase/app