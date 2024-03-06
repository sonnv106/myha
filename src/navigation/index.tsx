import {View, Text} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SCREENS from '../constants/screens'
import Splash from '../screens/splash'
import BottomTabNavigator from './BottomTabNavigator'
import Login from '../screens/login'

const {Navigator, Group, Screen} = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={SCREENS.SPLASH} component={Splash} />
      <Screen name={SCREENS.LOGIN} component={Login} />
      <Group>
        <Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      </Group>
    </Navigator>
  )
}

export default RootNavigator
