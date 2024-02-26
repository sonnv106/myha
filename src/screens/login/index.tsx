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

const LoginScreen = () => {
  const [formType, setFormType] = useState('login')
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true)
  const [secureTextEntryCfPassword, setSecureTextEntryCfPassword] =
    useState(true)
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
                placeholderTextColor={colors.A8A7A7}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{fontSize: 16}}
                keyboardType="email-address"
              />
              <Input
                placeholder="Password"
                rightIcon={
                  <TouchableOpacity
                    onPress={() => {
                      setSecureTextEntryPassword(!secureTextEntryPassword)
                    }}>
                    {secureTextEntryPassword ? (
                      <Icon
                        name="visibility"
                        color={colors.C3C2C2}
                        type="materialIcons"
                        size={18}
                      />
                    ) : (
                      <Icon
                        name="visibility-off"
                        color={colors.C3C2C2}
                        type="materialIcons"
                        size={18}
                      />
                    )}
                  </TouchableOpacity>
                }
                placeholderTextColor={colors.A8A7A7}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{fontSize: 16}}
                secureTextEntry={secureTextEntryPassword}
              />
              {formType == 'signup' ? (
                <Input
                  placeholder="Confirm password"
                  rightIcon={
                    <TouchableOpacity
                      onPress={() => {
                        setSecureTextEntryCfPassword(!secureTextEntryCfPassword)
                      }}>
                      {secureTextEntryCfPassword ? (
                        <Icon
                          name="visibility"
                          color={colors.C3C2C2}
                          type="materialIcons"
                          size={18}
                        />
                      ) : (
                        <Icon
                          name="visibility-off"
                          color={colors.C3C2C2}
                          type="materialIcons"
                          size={18}
                        />
                      )}
                    </TouchableOpacity>
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
                  {formType == 'login' ? `Log In` : `Sign Up`}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingBottom: 200,
    marginBottom: 200,
  },
  imagePraying: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 50,
    opacity: 0.5,
    left: 60,
    height: 350,
  },
  content: {
    flex: 1,
    padding: 20,
    position: 'absolute',
    width: '100%',
    top: 120,
  },
  modal: {
    borderRadius: 43,
    elevation: 20,
    borderWidth: 0.5,
    borderColor: colors.E7E4F1,
    width: '100%',
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 50,
    shadowColor: colors.DED6F4,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.52,
    shadowRadius: 5,
  },
  viewBtn: {
    shadowColor: colors.DED6F4,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    elevation: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.EAEAF5,
  },
  tabLogin: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  btnSignUp: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
  txtLogin: {
    color: colors.white,
  },
  txtSignUp: {
    color: colors.primary,
    fontWeight: '600',
  },
  circle: {
    borderRadius: 500,
    backgroundColor: colors.F0805A,
    height: 517,
    width: 517,
    position: 'absolute',
    top: -180,
    left: -60,
    overflow: 'hidden',
  },
  inputContainer: {
    marginTop: 40,
  },
  txtForgotPassword: {
    textAlign: 'right',
    marginRight: 10,
    color: colors.A8A7A7,
  },
  btnLogin: {
    shadowColor: colors.E4DDF6,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2.22,
    elevation: 5,
    width: '100%',
    height: 45,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
    marginTop: 54,
  },
  txtLogIn: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  txtOr: {
    textAlign: 'center',
    marginTop: 28,
    color: colors.A8A7A7,
  },
  vGoogleFB: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
  },
  btnGoogle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderColor: colors.EAEAF5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  inputContainerStyle: {
    borderColor: colors.EAEAF5,
  },
})
