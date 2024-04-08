import {Linking, Modal, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import colors from '../../res/colors'
import {Icon} from '@rneui/themed'
import Button from '../Button'
interface Props {
  visible: boolean
  setVisible: Function
  email?: string
}

const CheckEmailModal = ({visible, setVisible, email}: Props) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => setVisible(!visible)}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Pressable
            style={styles.btnClose}
            onPress={() => setVisible(!visible)}>
            <Icon name="close" size={22} />
          </Pressable>
          <View style={styles.circleEmail}>
            <View style={styles.circleEmail1}>
              <Icon name="email" color={'#27ae60'} size={22} />
            </View>
          </View>
          <Text style={styles.txtTitleVerify}>Xác minh email của bạn</Text>
          <Text>Email đã được gửi đến: </Text>
          <Text style={styles.txtEmail}>sonnguyen106mh@gmail.com</Text>
          <Text style={{textAlign: 'center', paddingHorizontal: 50}}>
            Vui lòng kiểm tra hộp thư đến và làm theo hướng dẫn.
          </Text>
          <Button
            title="Xác nhận email"
            buttonStyle={{backgroundColor: '#34495e', marginTop: 30}}
            containerStyle={{paddingHorizontal: 60}}
            onPress={() => {
              Linking.openURL('https://mail.google.com/')
            }}
          />
        </View>
      </View>
    </Modal>
  )
}

export default CheckEmailModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  content: {
    // flex: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: colors.white,
    minHeight: 150,

    flexDirection: 'column',
    alignItems: 'center',
  },
  btnClose: {
    // backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 25,
    height: 25,
    position: 'absolute',
    right: 15,
    top: 15,
  },
  circleEmail: {
    padding: 5,
    backgroundColor: '#d9fadc',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleEmail1: {
    padding: 5,
    backgroundColor: '#c9f0cd',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitleVerify: {
    fontSize: 24,
    color: '#34495e',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  txtEmail: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
})
