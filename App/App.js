import React, {useEffect, useState} from 'react';
import AuthScreen from './screens/auth/AuthScreen';
import HomeScreen from './screens/app/Home';
import SplashScreen from './screens/SplashScreen';
import {useDispatch, useSelector} from 'react-redux';
import {getUserFromStorage} from './redux/reducers/authSlice';
export default function App() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(getUserFromStorage());
  }, []);
  return (
    <>
      {!user && <AuthScreen />}
      {user && <HomeScreen />}
    </>
  );
}
