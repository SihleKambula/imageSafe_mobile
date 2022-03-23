import auth from '@react-native-firebase/auth';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Tab, TabView, Text} from 'react-native-elements';
import Login from './Login';
import SignUp from './SignUp';
export default function AuthScreen() {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState(null);
  const [init, setInit] = useState(true);

  const onAuthStateChange = user => {
    setUser(user);
    if (init) setInit(false);
    console.log(user);
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChange);
    return subscribe;
  }, []);

  return (
    <>
      {init && (
        <View>
          <Text>Loading</Text>
        </View>
      )}
      <View style={styles.container}>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
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
