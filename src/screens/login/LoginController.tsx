import auth from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-google-signin/google-signin'

export const onGoogleButtonPress = async () => {
  // Check if your device supports Google Play
  try {
    await GoogleSignin.hasPlayServices()
    const userInfo = await GoogleSignin.signIn()
    console.log('user info', userInfo)
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken || userInfo.serverAuthCode || userInfo.user.id,
    )
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential)
  } catch (error) {
    console.log(error)
  }
}
