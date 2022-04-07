import React from 'react';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout, reset} from '../../redux/reducers/authSlice';
import {FlatGrid} from 'react-native-super-grid';
import ImageView from '../../components/ImageView';
import firestore from '@react-native-firebase/firestore';
export default function HomeScreen({navigation}) {
  const {user} = useSelector(state => state.auth);
  const myUser = user.user;
  const dispatch = useDispatch();

  //local state
  const [images, setImages] = useState(null);

  useEffect(() => {
    dispatch(reset());
    const {uid} = myUser;
    const subscribe = firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot(doc => {
        setImages(doc.data().images);
      });
    return () => subscribe();
  }, [myUser]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ScrollView style={styles.container}>
      {images && (
        <FlatGrid
          itemDimension={130}
          data={images}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Download', {imageLink: item})
              }>
              <ImageView imageUrl={item} />
            </TouchableOpacity>
          )}
        />
      )}

      <Button title="Logout" onPress={handleLogout} />
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
