import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../../components/Header';
import Download from './Download';
import HomeScreen from './Home';

export default function Main() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ImageSafe"
          component={HomeScreen}
          options={{headerTitle: props => <Header {...props} />}}
        />
        <Stack.Screen name="Download" component={Download} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
