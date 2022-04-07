import React from 'react';
import {Image, Pressable, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {uploadImage} from '../redux/reducers/storageSlice';
import colors from '../constants/colors';
import {logout} from '../redux/reducers/authSlice';
export default function Header() {
  const dispatch = useDispatch();

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      dispatch(uploadImage(image));
    });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.header}>
      <Image
        style={{width: 100, height: 50, resizeMode: 'contain'}}
        source={require('../assets/logo.png')}
      />
      <View style={styles.iconsContainer}>
        <Pressable onPress={chooseImage} style={{marginRight: 10}}>
          <Icon name="upload" size={20} color={colors.primaryColor} />
        </Pressable>
        <Pressable onPress={handleLogout}>
          <Icon name="log-out" size={20} color={colors.primaryColor} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '95%',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
