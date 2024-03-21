import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import commonStyles from '../../res/styles'
import images from '../../res/images'
import {Icon} from '@rneui/themed'
import colors from '../../res/colors'
import {useTranslation} from 'react-i18next'
import styles from './styles'
import Button from '../../components/Button'
import {useForm} from 'react-hook-form'
import Input from '../../components/Input'
import auth from '@react-native-firebase/auth'
import {authSelector, loginGoogle} from '../../features'
import {onFacebookButtonPress, onGoogleButtonPress} from './LoginManager'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import {useDispatch, useSelector} from 'react-redux'
import {dispatchThunk, showToast} from '../../utils'
import {useNavigation} from '@react-navigation/native'
import SCREENS from '../../constants/screens'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

interface FormData {
  email: string
  password: string
  confirmPassword?: string
}

const LoginScreen = () => {
  const [formType, setFormType] = useState('login')
  const state = useSelector(authSelector)
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>()
  const {control, handleSubmit, reset} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const dispatch = useDispatch()
  const {t} = useTranslation()
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
      } else {
      }
    })
    return unsubscribe
  }, [])
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1096030835912-t2d21llcgerp9dhacr9ms1h1uc46d1tl.apps.googleusercontent.com',
    })
  }, [])

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
  const onSubmit = async (data: FormData) => {
    formType == 'login' ? delete data.confirmPassword : data
    if (formType == 'signup') {
      const userCredential = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      )
      // userCredential.user.sendEmailVerification()
    }
    if (formType == 'login') {
      const user = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      )
      if (user) {
        console.log('user login', user)
        navigate(SCREENS.BOTTOM_NAVIGATOR)
      } else {
        return
      }
    }
  }
  const checkLogin = formType == 'login' ? colors.primary : colors.white
  const loginWithGoogle = () => {
    dispatchThunk(
      dispatch,
      loginGoogle(),
      () => {
        navigate(SCREENS.BOTTOM_NAVIGATOR)
      },
      () => {
        showToast('error', 'Có lỗi xảy ra, vui lòng thử lại sau')
      },
    )
  }
  const handleSignUpWithEmail = async (email: string, password: string) => {}
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
                <Text style={styles.txtForgotPassword}>Forgot password?</Text>
              </Pressable>
            ) : null}
            <Button
              title={formType == 'login' ? t('login') : t('signup')}
              buttonStyle={styles.mtBtn}
              onPress={handleSubmit(onSubmit)}
            />
            <Text style={styles.txtOr}>OR</Text>
            <View style={styles.vGoogleFB}>
              <Pressable style={styles.btnGoogle} onPress={loginWithGoogle}>
                <Image source={images.icGoogle} />
              </Pressable>
              <Pressable
                style={styles.btnGoogle}
                onPress={() =>
                  onFacebookButtonPress().then(rs =>
                    console.log('Signed in with Facebook!', rs),
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
