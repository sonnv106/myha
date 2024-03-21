import {View, Text} from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import Button from '../../components/Button'
const HomeScreen = () => {
  const logout = () => {
    auth().signOut()
  }
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>HomeScreen</Text>
      <Button onPress={logout} title="Logout" />
    </View>
  )
}

export default HomeScreen
