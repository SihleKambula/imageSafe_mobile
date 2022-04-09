import firestore, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// add user to DB
export async function addUserToDB(userID) {
  await firestore().collection('users').doc(userID).set({
    images: [],
  });
}

export async function addImageLinkToDB(url) {
  const userID = auth().currentUser.uid;
  firestore()
    .collection('users')
    .doc(userID)
    .update({
      images: firebase.firestore.FieldValue.arrayUnion(url),
    });
}
