import React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Input, TabView, Text} from 'react-native-elements';
import colors from '../../constants/colors';
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [confirmError, setConfirmError] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes('@')) setEmailError(true);
    if (!password || password.length < 6) setPasswordError(true);
    if (password != passwordConfirm) setConfirmError(true);
    if (
      password.length > 6 &&
      email.includes('@') &&
      password === passwordConfirm
    ) {
      setEmailError(false);
      setPasswordError(false);
      setConfirmError(false);
      //todo:database
      console.log('DB call');
    }
  };
  return (
    <TabView.Item style={styles.container}>
      <View>
        <Input
          placeholder="example@wolfmedia.com"
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
          secureTextEntry={true}
          label="Password"
          inputStyle={styles.input}
          labelStyle={styles.label}
          inputContainerStyle={styles.inputContainer}
          onChangeText={setPassword}
          errorStyle={{color: 'red', fontSize: 14}}
          errorMessage={passwordError && 'Enter correct password'}
        />
        <Input
          placeholder="*******"
          secureTextEntry={true}
          label="Confirm Password"
          inputStyle={styles.input}
          labelStyle={styles.label}
          inputContainerStyle={styles.inputContainer}
          onChangeText={setPasswordConfirm}
          errorStyle={{color: 'red', fontSize: 14}}
          errorMessage={confirmError && "Passwords don't match"}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={{color: colors.secondaryColor}}>Login</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Sign Up"
          titleStyle={{color: colors.secondaryColor}}
          buttonStyle={styles.button}
          onPress={handleSubmit}
        />
      </View>
    </TabView.Item>
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
  text: {
    fontSize: 16,
    marginLeft: 10,
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
