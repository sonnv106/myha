import auth from '@react-native-firebase/auth'
import {LoginManager, AccessToken} from 'react-native-fbsdk-next'
import {useDispatch} from 'react-redux'

const dispatch = useDispatch()
async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ])
  console.log('result', result)

  if (result.isCancelled) {
    throw 'User cancelled the login process'
  }
  // Once signed in, get the users AccessToken
  const data = await AccessToken.getCurrentAccessToken()
  console.log('data', data)

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
export default onFacebookButtonPress
