import auth from '@react-native-firebase/auth';

// anonSign
export async function anonSignIn() {
  try {
    const res = await auth().signInAnonymously();
    console.log(res);
  } catch (error) {
    console.log(error.code);
  }
}
//login

export async function logUserIn(user) {
  const {email, password} = user;
  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    console.log(res);
  } catch (error) {
    console.log(error.code);
    return null;
  }
}

//register
export async function createUser(user) {
  const {email, password} = user;
  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    console.log(res);
  } catch (error) {
    console.log(error.code);
    return null;
  }
}
//logout

export async function logOut() {
  try {
    await auth().signOut();
    return null;
  } catch (error) {
    console.log(error.code);
    return error.code;
  }
}
