import React, {useEffect, useState} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SCREENS from '../constants/screens'
import Splash from '../screens/splash'
import BottomTabNavigator from './BottomTabNavigator'
import Login from '../screens/login'
import auth from '@react-native-firebase/auth'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {useDispatch, useSelector} from 'react-redux'
import {IRootState} from '../redux'
import {dispatchThunk} from '../utils'
import {
  autoLoginFulfilled,
  autoLoginPending,
  autoLoginRejected,
} from '../features'
import AsyncStorage from '@react-native-async-storage/async-storage'
const {Navigator, Group, Screen} = createNativeStackNavigator()

const RootNavigator = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const authState = useSelector<IRootState>(state => state.auth)
  console.log('auth state', authState)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1500)
    // dispatch(autoLoginPending())
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('uuuu', user)
        dispatch(autoLoginFulfilled(user))
      } else {
        dispatch(autoLoginRejected())
      }
    })
    return () => {
      unsubscribe()
      clearTimeout(timeout)
    }
  }, [])
  const verify = ({user}: any) => {
    console.log('2222', user)
    if (
      user?.providerData?.[0]?.providerId == 'facebook.com' ||
      user?.providerData?.[1]?.providerId == 'facebook.com'
    ) {
      return true
    }
    if (
      user?.providerData?.[0]?.providerId == 'google.com' ||
      user?.providerData?.[1]?.providerId == 'google.com'
    ) {
      return true
    }
    if (
      user?.providerData?.[0]?.providerId == 'password' &&
      user?.emailVerified
    ) {
      return true
    }
    return false
  }
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {loading ? (
        <Screen name={SCREENS.SPLASH} component={Splash} />
      ) : (
        <>
          {!verify(authState) ? (
            <Screen name={SCREENS.LOGIN} component={Login} />
          ) : (
            <Screen
              name={SCREENS.BOTTOM_NAVIGATOR}
              component={BottomTabNavigator}
            />
          )}
        </>
      )}
    </Navigator>
  )
}

export default RootNavigator
