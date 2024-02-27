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
