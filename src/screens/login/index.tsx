import {Image, Pressable, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import commonStyles from '../../res/styles'
import images from '../../res/images'
import colors from '../../res/colors'
import {useTranslation} from 'react-i18next'
import styles from './styles'
import Button from '../../components/Button'
import {useForm} from 'react-hook-form'
import Input from '../../components/Input'
import {
  authSelector,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../../features'
import {onFacebookButtonPress, onGoogleButtonPress} from './LoginManager'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import {useDispatch, useSelector} from 'react-redux'
import {dispatchThunk, showToast} from '../../utils'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {IRootState} from '../../redux'
import {validateEmail, validatePassword} from '../../utils/validate'
import {yupResolver} from '@hookform/resolvers/yup'
import yup from '../../utils/yup'
import CheckEmailModal from '../../components/Modal/checkEmail'

interface FormData {
  email: string
  password: string
  confirmPassword?: string
}
const schema = yup.object().shape({
  email: yup.string().trim().email().required('Vui lòng nhập email!'),
  password: yup.string().isValidPassword(),
  confirmPassword: yup.string().isValidConfirmPassword(),
})
let render = 0
const LoginScreen = () => {
  const [formType, setFormType] = useState('login')
  const state = useSelector(authSelector)
  const authState = useSelector<IRootState>(state => state.auth)
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>()
  const {t} = useTranslation()
  const [visible, setVisible] = useState(true)

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  })

  const dispatch = useDispatch()

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
      if (validatePassword(data.password) && validateEmail(data.email)) {
        dispatchThunk(dispatch, createUserWithEmailAndPassword(data), () => {
          showToast('success', 'Vui lòng kiểm tra email! ')
          reset()
        })
      }
    }
    if (formType == 'login') {
      if (
        data.email &&
        validateEmail(data.email) &&
        data.password &&
        validatePassword(data.password)
      ) {
        dispatchThunk(
          dispatch,
          signInWithEmailAndPassword(data),
          (response: any) => {
            if (!response?.emailVerified) {
              showToast('info', 'Vui lòng xác thực email', undefined, 3500)
            }
          },
          (error: any) => {
            showToast('error', error?.message)
          },
        )
      }
    }
  }
  const checkLogin = formType == 'login' ? colors.primary : colors.white

  const loginWithGoogle = () => {
    onGoogleButtonPress()
  }
  const signInWithFacebook = () => {
    onFacebookButtonPress()
  }
  render++
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
              errorMessage={errors?.email?.message}
            />
            <Input
              name="password"
              isPassword
              control={control}
              placeholder="Password"
              placeholderTextColor={colors.A8A7A7}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={{fontSize: 16}}
              errorMessage={errors?.password?.message}
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
                errorMessage={errors?.confirmPassword?.message}
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
              loading={authState?.loading}
            />
            <Text style={styles.txtOr}>OR</Text>
            <View style={styles.vGoogleFB}>
              <Pressable style={styles.btnGoogle} onPress={loginWithGoogle}>
                <Image source={images.icGoogle} />
              </Pressable>
              <Pressable style={styles.btnGoogle} onPress={signInWithFacebook}>
                <Image source={images.icFacebook} />
              </Pressable>
              <CheckEmailModal visible={visible} setVisible={setVisible} />
              {/* <Text>{render}</Text> */}
            </View>
          </View>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  )
}

export default LoginScreen
