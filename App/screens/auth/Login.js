import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Input, TabView, Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import colors from '../../constants/colors';
import {login, reset} from '../../redux/reducers/authSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const {user, isLoading, isSuccess, isError} = useSelector(
    state => state.auth,
  );

  useEffect(() => {
    dispatch(reset());
  }, [user, isSuccess]);

  const handleSubmit = () => {
    if (!email || !email.includes('@')) setEmailError(true);
    if (!password || password.length < 6) setPasswordError(true);
    if (password.length > 6 && email.includes('@')) {
      setEmailError(false);
      setPasswordError(false);
      dispatch(login({email, password}));
    }
  };
  return (
    <>
      <TabView.Item style={styles.container}>
        {isLoading ? (
          <View>
            <Text>Loading</Text>
          </View>
        ) : (
          <View>
            <Input
              placeholder="example@wolfmedia.com"
              value={email}
              label="Email"
              inputStyle={styles.input}
              labelStyle={styles.label}
              inputContainerStyle={styles.inputContainer}
              onChangeText={setEmail}
              errorStyle={{color: 'red', fontSize: 14}}
              errorMessage={emailError && 'Enter correct email'}
            />
            <Input
              placeholder="*******"
              value={password}
              secureTextEntry={true}
              label="Password"
              inputStyle={styles.input}
              labelStyle={styles.label}
              inputContainerStyle={styles.inputContainer}
              onChangeText={setPassword}
              errorStyle={{color: 'red', fontSize: 14}}
              errorMessage={passwordError && 'Enter correct password'}
            />
            <Button
              title="Login"
              titleStyle={{color: colors.secondaryColor}}
              buttonStyle={styles.button}
              onPress={handleSubmit}
            />
          </View>
        )}
      </TabView.Item>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    borderColor: colors.primaryColor,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  label: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '600',
    color: colors.primaryColor,
  },
  button: {
    backgroundColor: colors.primaryColor,
    alignSelf: 'center',
    width: 120,
    marginTop: 30,
    borderRadius: 10,
  },
});
