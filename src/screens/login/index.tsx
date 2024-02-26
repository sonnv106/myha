import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import commonStyles from '../../res/styles'
import images from '../../res/images'
import {Icon, Input} from '@rneui/themed'

const LoginScreen = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar translucent />
      <View style={[commonStyles.container, styles.container]}>
        <View style={styles.circle}>
          <Image source={images.praying} style={styles.imagePraying} />
        </View>
        <View style={styles.content}>
          <View style={styles.modal}>
            <View style={[commonStyles.row, styles.viewBtn]}>
              <Pressable style={styles.tabLogin}>
                <Text style={styles.txtLogin}>Log In</Text>
              </Pressable>
              <Pressable style={styles.btnSignUp}>
                <Text style={styles.txtSignUp}>Sign Up</Text>
              </Pressable>
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Email"
                placeholderTextColor={'#A8A7A7'}
                inputContainerStyle={{
                  borderColor: '#EAEAF5',
                }}
                inputStyle={{fontSize: 16}}
                keyboardType="email-address"
              />
              <Input
                placeholder="Password"
                rightIcon={
                  <TouchableOpacity>
                    <Icon
                      name="visibility"
                      color={'#C3C2C2'}
                      type="materialIcons"
                      size={18}
                    />
                  </TouchableOpacity>
                }
                placeholderTextColor={'#A8A7A7'}
                inputContainerStyle={{
                  borderColor: '#EAEAF5',
                }}
                inputStyle={{fontSize: 16}}
                secureTextEntry
              />
              <Pressable>
                <Text style={styles.txtForgotPassword}>Forgot password?</Text>
              </Pressable>
              <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogIn}>Log In</Text>
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
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
    padding: 20,
    position: 'absolute',
    width: '100%',
    top: 160,
  },
  modal: {
    borderRadius: 43,
    elevation: 20,
    borderWidth: 0.5,
    borderColor: '#E7E4F1',
    width: '100%',
    backgroundColor: '#FFF',
    padding: 20,
    paddingTop: 50,
    shadowColor: '#DED6F4',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.52,
    shadowRadius: 5,
  },
  viewBtn: {
    shadowColor: '#DED6F4',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAEAF5',
  },
  tabLogin: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: '#FE7940',
    borderRadius: 10,
  },
  btnSignUp: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  txtLogin: {
    color: '#FFF',
  },
  txtSignUp: {
    color: '#FE7940',
    fontWeight: '600',
  },
  circle: {
    borderRadius: 500,
    backgroundColor: '#F0805A',
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
    color: '#A8A7A7',
  },
  btnLogin: {
    width: '100%',
    height: 45,
    backgroundColor: '#FE7940',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
    marginTop: 54,
  },
  txtLogIn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  txtOr: {
    textAlign: 'center',
    marginTop: 28,
    color: '#A8A7A7',
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
    borderColor: '#EAEAF5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
  },
})
