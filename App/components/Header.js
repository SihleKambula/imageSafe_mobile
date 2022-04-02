import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {uploadImage} from '../redux/reducers/storageSlice';
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

  return (
    <View style={styles.header}>
      <Image
        style={{width: 100, height: 50, resizeMode: 'contain'}}
        source={require('../assets/logo.png')}
      />
      <Pressable onPress={chooseImage}>
        <Text>
          <Icon name="rocket" size={30} color="#900" />
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '90%',
  },
});
