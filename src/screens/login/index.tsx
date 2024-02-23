import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import commonStyles from '../../res/styles'

const LoginScreen = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={commonStyles.container}>
        <Text>LoginScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
