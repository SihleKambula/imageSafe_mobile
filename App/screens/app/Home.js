import React from 'react';
import {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout, reset} from '../../redux/reducers/authSlice';
import {Image} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const ImageView = ({imageUrl}) => {
  return (
    <Image
      style={{width: 150, height: 150, resizeMode: 'cover', borderRadius: 10}}
      source={{uri: imageUrl}}
    />
  );
};

export default function HomeScreen() {
  const {user} = useSelector(state => state.auth);
  const myUser = user.user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  const images = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1588167056547-c183313da47c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=531&q=80',
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1572363420552-058bd41af8c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{justifyContent: 'center'}}>
      <FlatGrid
        itemDimension={130}
        data={images}
        renderItem={({item}) => <ImageView imageUrl={item.imageUrl} />}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
