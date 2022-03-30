import React from 'react';
import {Image} from 'react-native';

export default function ImageView({imageUrl}) {
  return (
    <Image
      style={{width: 150, height: 150, resizeMode: 'cover', borderRadius: 10}}
      source={{uri: imageUrl}}
    />
  );
}
