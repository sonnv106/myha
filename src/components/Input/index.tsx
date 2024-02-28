import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native'
import React, {ReactNode, useState} from 'react'
import {Input as RNEInput, InputProps, Icon} from '@rneui/themed'
import {useController} from 'react-hook-form'
import {IconNode} from '@rneui/base'
import colors from '../../res/colors'

interface CustomInputProps extends InputProps {
  name: string
  control?: any
  onChangeText?: (v: string) => void
  disabled?: boolean
  inputContainerStyle?: ViewStyle
  inputStyle?: TextStyle
  rightIcon?: IconNode
  rightIconContainerStyle?: ViewStyle
  leftIcon?: IconNode
  leftIconContainerStyle?: ViewStyle
  label?: ReactNode
  labelStyle?: TextStyle
  errorMessage?: string
  errorStyle?: TextStyle
  renderErrorMessage?: boolean
  isPassword?: boolean
  isEmail?: boolean
}

const Input = ({
  name,
  control,
  rightIcon,
  isPassword,
  ...props
}: CustomInputProps) => {
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(false)
  const togglePasswordVisible = () =>
    setSecureTextEntryPassword(!secureTextEntryPassword)
  const {
    field: {value, onChange, onBlur},
  } = useController({
    control,
    defaultValue: '',
    name,
  })
  return (
    <RNEInput
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      rightIcon={
        (isPassword && (
          <Icon
            name={secureTextEntryPassword ? 'visibility' : 'visibility-off'}
            onPress={togglePasswordVisible}
            color={colors.C3C2C2}
            type="materialIcons"
            size={18}
          />
        )) ||
        rightIcon
      }
      secureTextEntry={isPassword && !secureTextEntryPassword}
      {...props}
    />
  )
}

export default Input

const styles = StyleSheet.create({})
