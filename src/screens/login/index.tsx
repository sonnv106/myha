import {
  Image,
  Platform,
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
import {
  AccessToken,
  AuthenticationToken,
  LoginButton,
} from 'react-native-fbsdk-next'
import onFacebookButtonPress from './LoginManager'
let render = 0

interface FormData {
  email: string
  password: string
  confirmPassword?: string
}

const LoginScreen = () => {
  const [formType, setFormType] = useState('login')
  const {control, handleSubmit, reset} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const {t} = useTranslation()

  const setFormTypeLogin = () => {
    if (formType !== 'login') {
      setFormType('login')
      reset()
    }
  }
  const setFormTypeSignUp = () => {
    if (formType !== 'signup') {
      setFormType('signup')
      reset()
    }
  }
  const onSubmit = (data: FormData) => {
    formType == 'login' ? delete data.confirmPassword : data
    console.log(data)
  }
  render++
  const checkLogin = formType == 'login' ? colors.primary : colors.white
  return (
    // <SafeAreaView style={commonStyles.container}>
    <View style={[commonStyles.container, styles.container]}>
      {/* <StatusBar translucent /> */}
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
                    color: formType == 'login' ? colors.white : colors.primary,
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
              onPress={handleSubmit(onSubmit)}
            />
            <Text style={styles.txtOr}>OR</Text>
            <View style={styles.vGoogleFB}>
              <Pressable style={styles.btnGoogle}>
                <Image source={images.icGoogle} />
              </Pressable>
              <Pressable
                style={styles.btnGoogle}
                onPress={() =>
                  onFacebookButtonPress().then(() =>
                    console.log('Signed in with Facebook!'),
                  )
                }>
                <Image source={images.icFacebook} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  )
}

export default LoginScreen
