import React, { useEffect } from 'react';
import {Alert, PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import store from './src/redux/store';
import {Provider} from 'react-redux'

function App(): React.JSX.Element {
  const requestUserPermission = async () =>{
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  useEffect(()=>{
    requestUserPermission()
    // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
    
  }, [])
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
