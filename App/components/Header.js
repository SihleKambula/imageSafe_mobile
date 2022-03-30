import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={{width: 100, height: 50, resizeMode: 'contain'}}
        source={require('../assets/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
});
