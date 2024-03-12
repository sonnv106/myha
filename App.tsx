import React, {useEffect} from 'react'
import {Alert} from 'react-native'
import messaging from '@react-native-firebase/messaging'
import {persistor, store} from './src/redux/store'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from './src/navigation'
import Toast from 'react-native-toast-message'
import {PersistGate} from 'redux-persist/integration/react'
import './i18n.config'
import {Settings} from 'react-native-fbsdk-next'
// import {Settings} from 'react-native-fbsdk-next'
function App(): React.JSX.Element {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log('Authorization status:', authStatus)
    }
  }
  useEffect(() => {
    requestUserPermission()
    // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage))
    })

    return unsubscribe
  }, [])

  // Setting the facebook app id using setAppID
  // Remember to set CFBundleURLSchemes in Info.plist on iOS if needed

  useEffect(() => {
    Settings.initializeSDK()
    Settings.setAppID('825803189356202')
    Settings.setAdvertiserTrackingEnabled(true)
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigator />
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
