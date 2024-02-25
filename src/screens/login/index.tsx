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
              <Pressable style={styles.btnLogin}>
                <Text style={styles.txtLogin}>Log In</Text>
              </Pressable>
              <Pressable style={styles.btnSignUp}>
                <Text style={styles.txtSignUp}>Log In</Text>
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
                <Text
                  style={{
                    backgroundColor: 'red',
                    textAlign: 'right',
                    marginRight: 10,
                  }}>
                  Forgot password?
                </Text>
              </Pressable>
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
    // backgroundColor: '#DDD',
    position: 'absolute',
    width: '100%',
    top: 160,
  },
  modal: {
    borderRadius: 43,
    elevation: 3,
    width: '100%',
    backgroundColor: '#FFF',
    padding: 20,
    paddingTop: 50,
    // backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
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
  btnLogin: {
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
    // opacity: 0.5,
  },
  inputContainer: {
    marginTop: 40,
    // backgroundColor: 'red',
  },
})
