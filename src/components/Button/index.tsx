import {Button as RNEButton, ButtonProps as RNButtonProps} from '@rneui/themed'
import React, {FC} from 'react'
import {StyleSheet, View} from 'react-native'
import colors from '../../res/colors'
interface ButtonProps extends RNButtonProps {
  title?: string
  titleStyle?: {}
  textColor?: string
  buttonStyle?: {}
  color?: string
  borderRadius?: number
  loading?: boolean
  disable?: boolean
  onPress?: () => void
}
const Button: FC<ButtonProps> = ({
  disable = false,
  loading = false,
  title,
  borderRadius,
  color = colors.primary,
  textColor = colors.white,
  onPress,
  ...props
}) => {
  return (
    <RNEButton
      title={title}
      titleStyle={[styles.txtTitle, props.titleStyle]}
      type="solid"
      buttonStyle={[styles.btn, props.buttonStyle]}
      containerStyle={[styles.pd, props.containerStyle]}
      onPress={onPress}></RNEButton>
  )
}

export default Button

const styles = StyleSheet.create({
  txtTitle: {
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  btn: {
    shadowColor: colors.E4DDF6,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    elevation: 5,
    width: '100%',
    height: 45,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
    flexDirection: 'row',
  },
  pd: {
    paddingBottom: 10,
  },
})
