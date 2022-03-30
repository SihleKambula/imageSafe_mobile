import React from 'react';
import {Text, View} from 'react-native';

export default function Download({route}) {
  const {imageLink} = route.params;
  return (
    <View>
      <Text>{imageLink}</Text>
    </View>
  );
}
