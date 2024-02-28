import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native'
import React, {useState} from 'react'
import commonStyles from '../../res/styles'
import images from '../../res/images'
import {Icon} from '@rneui/themed'
import colors from '../../res/colors'
import {useTranslation} from 'react-i18next'
import styles from './styles'
import Button from '../../components/Button'
import {useForm} from 'react-hook-form'
import Input from '../../components/Input'

let render = 0

const LoginScreen = () => {
  const [formType, setFormType] = useState('login')
  const [email, setEmail] = useState('')
  const {clearErrors, control, formState, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
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
  render++
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
                  {t('login')}
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
                  {t('signup')}
                </Text>
              </Pressable>
            </View>
            <View style={styles.inputContainer}>
              <Input
                name={'email'}
                control={control}
                placeholder="Email"
                textContentType="oneTimeCode"
                placeholderTextColor={colors.A8A7A7}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{fontSize: 16}}
                keyboardType="email-address"
              />
              <Input
                name="password"
                isPassword
                control={control}
                placeholder="Password"
                placeholderTextColor={colors.A8A7A7}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{fontSize: 16}}
              />
              {formType == 'signup' ? (
                <Input
                  name="confirmPassword"
                  isPassword
                  control={control}
                  placeholder="Confirm password"
                  textContentType="oneTimeCode"
                  placeholderTextColor={colors.A8A7A7}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={{fontSize: 16}}
                />
              ) : null}
              {formType == 'login' ? (
                <Pressable>
                  <Text style={styles.txtForgotPassword}>
                    Forgot password? {render}
                  </Text>
                </Pressable>
              ) : null}
              <Button
                title={formType == 'login' ? t('login') : t('signup')}
                buttonStyle={styles.mtBtn}
              />
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
