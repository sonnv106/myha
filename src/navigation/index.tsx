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
      if (user && user.providerId == 'password' && user.emailVerified) {
      }
      if (user) {
        dispatch(autoLoginFulfilled(user))
      } else {
        console.log('reject')
        dispatch(autoLoginRejected())
      }
    })
    return () => {
      unsubscribe()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {loading ? (
        <Screen name={SCREENS.SPLASH} component={Splash} />
      ) : (
        <>
          {!authState?.user ? (
            <Screen name={SCREENS.LOGIN} component={Login} />
          ) : (
            <Group>
              <Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
              />
            </Group>
          )}
        </>
      )}
    </Navigator>
  )
}

export default RootNavigator
