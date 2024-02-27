import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {useState} from 'react'
import commonStyles from '../../res/styles'
import images from '../../res/images'
import {Icon, Input} from '@rneui/themed'
import colors from '../../res/colors'
import {useTranslation} from 'react-i18next'
import styles from './styles'
const LoginScreen = () => {
  const [formType, setFormType] = useState('login')
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(false)
  const [secureTextEntryCfPassword, setSecureTextEntryCfPassword] =
    useState(false)

  const {t} = useTranslation()

  const setFormTypeLogin = () => {
    setFormType('login')
  }
  const setFormTypeSignUp = () => {
    setFormType('signup')
  }
  const checkLogin = formType == 'login' ? colors.primary : colors.white
  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar translucent />
      {/* <ScrollView> */}

      <View style={[commonStyles.container, styles.container]}>
        <View style={styles.circle}>
          <Image source={images.praying} style={styles.imagePraying} />
        </View>
        <View style={styles.content}>
          <View style={styles.modal}>
            <View style={[commonStyles.row, styles.viewBtn]}>
              <Pressable
                style={[
                  styles.tabLogin,
                  {
                    backgroundColor: checkLogin,
                  },
                ]}
                onPress={setFormTypeLogin}>
                <Text
                  style={[
                    styles.txtLogin,
                    {
                      color:
                        formType == 'login' ? colors.white : colors.primary,
                    },
                  ]}>
                  Log In
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.btnSignUp,
                  {
                    backgroundColor:
                      formType == 'signup' ? colors.primary : colors.white,
                  },
                ]}
                onPress={setFormTypeSignUp}>
                <Text
                  style={[
                    styles.txtSignUp,
                    {
                      color: checkLogin,
                    },
                  ]}>
                  Sign Up
                </Text>
              </Pressable>
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Email"
                textContentType="oneTimeCode"
                placeholderTextColor={colors.A8A7A7}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{fontSize: 16}}
                keyboardType="email-address"
              />
              <Input
                placeholder="Password"
                onFocus={() => {
                  setSecureTextEntryPassword(true)
                }}
                rightIcon={
                  <Icon
                    name={
                      secureTextEntryPassword ? 'visibility' : 'visibility-off'
                    }
                    color={colors.C3C2C2}
                    type="materialIcons"
                    size={18}
                    onPress={() => {
                      setSecureTextEntryPassword(!secureTextEntryPassword)
                    }}
                  />
                }
                placeholderTextColor={colors.A8A7A7}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{fontSize: 16}}
                secureTextEntry={secureTextEntryPassword}
              />
              {formType == 'signup' ? (
                <Input
                  placeholder="Confirm password"
                  onFocus={() => setSecureTextEntryCfPassword(true)}
                  textContentType="oneTimeCode"
                  rightIcon={
                    <Icon
                      name={
                        secureTextEntryCfPassword
                          ? 'visibility'
                          : 'visibility-off'
                      }
                      color={colors.C3C2C2}
                      type="materialIcons"
                      size={18}
                      onPress={() => {
                        setSecureTextEntryCfPassword(!secureTextEntryCfPassword)
                      }}
                    />
                  }
                  placeholderTextColor={colors.A8A7A7}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={{fontSize: 16}}
                  secureTextEntry={secureTextEntryCfPassword}
                />
              ) : null}
              {formType == 'login' ? (
                <Pressable>
                  <Text style={styles.txtForgotPassword}>Forgot password?</Text>
                </Pressable>
              ) : null}
              <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogIn}>
                  {formType == 'login' ? t('login') : t('signup')}
                </Text>
              </TouchableOpacity>
              <Text style={styles.txtOr}>OR</Text>
              <View style={styles.vGoogleFB}>
                <Pressable style={styles.btnGoogle}>
                  <Image source={images.icGoogle} />
                </Pressable>
                <Pressable style={styles.btnGoogle}>
                  <Image source={images.icFacebook} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default LoginScreen
