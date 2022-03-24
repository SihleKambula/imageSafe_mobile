import React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/reducers/authSlice';

export default function HomeScreen() {
  const {user} = useSelector(state => state.auth);
  useEffect(() => {
    if (!user) return null;
  }, [user]);
  const myUser = user?.user;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{myUser.email}</Text>
      <Button title="logout" onPress={handleLogout} />
    </View>
  );
}
