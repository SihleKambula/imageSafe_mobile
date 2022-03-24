import auth from '@react-native-firebase/auth';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Image, StyleSheet, View, ScrollView} from 'react-native';
import {Tab, TabView, Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';
export default function AuthScreen() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/logo.png')} />
        </View>

        <Tab
          variant="default"
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={styles.tab}>
          <Tab.Item
            title="Login"
            titleStyle={{
              fontSize: 14,
              color: '#040B51',
              textTransform: 'capitalize',
            }}
          />
          <Tab.Item
            title="Sign Up"
            titleStyle={{
              fontSize: 14,
              color: '#040B51',
              textTransform: 'capitalize',
            }}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <Login />
          <SignUp />
        </TabView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  tab: {
    backgroundColor: 'cyan',
    height: 3,
  },
});
