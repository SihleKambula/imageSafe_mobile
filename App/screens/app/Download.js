import React from 'react';
import {
  ImageBackground,
  Pressable,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import colors from '../../constants/colors';
import RNFetchBlob from 'rn-fetch-blob';
import {ToastAndroid} from 'react-native';
export default function Download({route}) {
  const {imageLink} = route.params;
  const downloadFile = () => {
    let date = new Date();
    let FILE_URL = imageLink;
    let file_ext = getFileExtention(FILE_URL);
    file_ext = '.' + file_ext[0];
    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/file_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        ToastAndroid.show('Saved', ToastAndroid.SHORT);
      });
  };
  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };
  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      downloadFile();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          downloadFile();
          //   console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.log(err);
      }
    }
  };
  return (
    <View>
      <ImageBackground
        style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}
        source={{uri: imageLink}}>
        <Pressable onPress={checkPermission}>
          <Text
            style={{
              color: colors.secondaryColor,
              fontSize: 20,
              textAlign: 'center',
              backgroundColor: '#000000c0',
            }}>
            Save
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
