/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
// });
messaging()
  .subscribeToTopic('allDevices')
  .then(() => console.log('Subscribed to topic!'))
  .catch(error => console.error('Error subscribing to topic:', error));
AppRegistry.registerComponent(appName, () => App);
