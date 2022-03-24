import React, {useState} from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import HomeScreen from './app/Home';
import AuthScreen from './auth/AuthScreen';

export default function SplashScreen({navigation}) {
  const {user} = useSelector(state => state.auth);
  const [init, setInit] = useState(true);
  useEffect(() => {
    if (user) setInit(false);
  }, [user]);
  return (
    <>
      {init && (
        <View>
          <Text>Splash</Text>
        </View>
      )}
      {user && navigation.replaceWith('Home')}
      {!user && navigation.replaceWith('Auth')}
    </>
  );
}
