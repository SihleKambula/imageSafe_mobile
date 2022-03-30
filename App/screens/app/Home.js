import React from 'react';
import {useEffect} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout, reset} from '../../redux/reducers/authSlice';
import {FlatGrid} from 'react-native-super-grid';
import ImageView from '../../components/ImageView';
export default function HomeScreen({navigation}) {
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
    <ScrollView style={styles.container}>
      <FlatGrid
        itemDimension={130}
        data={images}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Download', {imageLink: item.imageUrl})
            }>
            <ImageView imageUrl={item.imageUrl} />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  modal: {
    width: 50,
  },
});
