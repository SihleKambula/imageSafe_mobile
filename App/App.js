import React, {useEffect, useState} from 'react';
import AuthScreen from './screens/auth/AuthScreen';
import {useDispatch, useSelector} from 'react-redux';
import {getUserFromStorage} from './redux/reducers/authSlice';
import Main from './screens/app/Main';
export default function App() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(getUserFromStorage());
  }, []);
  return (
    <>
      {!user && <AuthScreen />}
      {user && <Main />}
    </>
  );
}
