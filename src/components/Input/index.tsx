import {StyleSheet, Text, TextStyle, ViewStyle, View} from 'react-native'
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
  required?: boolean
  boxLabelStyle?: ViewStyle
}

const Input = ({
  name,
  control,
  rightIcon,
  isPassword,
  label,
  required,
  boxLabelStyle,
  labelStyle,
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
      label={
        label && (
          <View style={[styles.boxLabel, boxLabelStyle]}>
            <Text style={[labelStyle]}>
              {label}
              {required && <Text style={{color: colors.red}}> *</Text>}
            </Text>
          </View>
        )
      }
      secureTextEntry={isPassword && !secureTextEntryPassword}
      {...props}
    />
  )
}

export default Input

const styles = StyleSheet.create({
  boxLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
