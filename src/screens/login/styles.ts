import { Dimensions, StyleSheet } from "react-native";
import colors from "../../res/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      paddingBottom: 200,
      marginBottom: 200,
      // backgroundColor: 'red'
    },
    imagePraying: {
      width: Dimensions.get('window').width ,
      position: 'absolute',
      bottom: 50,
      opacity: 0.5,
      left: 80,
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
      top: -200,
      left: -80,
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
    mtBtn: {
      marginTop: 54}
  })
  export default styles