import auth from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import {LoginManager, AccessToken} from 'react-native-fbsdk-next'

const onFacebookButtonPress = async () => {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ])

  if (result.isCancelled) {
    throw 'User cancelled the login process'
  }
  // Once signed in, get the users AccessToken
  const data = await AccessToken.getCurrentAccessToken()

  if (!data) {
    throw 'Something went wrong obtaining access token'
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  )

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential)
}
const onGoogleButtonPress = async () => {
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

export {onFacebookButtonPress, onGoogleButtonPress}
