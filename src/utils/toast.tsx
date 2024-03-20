import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message'

export const showToast = (
  type: 'success' | 'error' | 'info',
  text1: string,
  text2?: string,
) => {
  switch (type) {
    case 'success':
      Toast.show({
        type: 'success',
        text1,
        text2,
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
        bottomOffset: 50,
      })
      break
    case 'error':
      Toast.show({
        type: 'error',
        text1,
        text2,
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
        bottomOffset: 50,
      })
      break
    case 'info':
      Toast.show({
        type: 'info',
        text1,
        text2,
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
        bottomOffset: 50,
      })
      break
    default:
      null
  }
}
