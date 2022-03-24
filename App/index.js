import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './redux/app/store';
import AuthScreen from './screens/auth/AuthScreen';
import HomeScreen from './screens/app/Home';
import SplashScreen from './screens/SplashScreen';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';

export default function App() {
  const [init, setInit] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChange(user) {
    setUser(user);
    if (init) setInit(false);
  }

  useEffect(() => {
    const sub = auth().onAuthStateChanged(onAuthStateChange);
    return sub;
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {init && <SplashScreen />}
        {!user && <AuthScreen />}
        {user && <HomeScreen />}
      </SafeAreaProvider>
    </Provider>
  );
}
