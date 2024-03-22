import auth from '@react-native-firebase/auth'
export const autoLogIn = async () => {
    let userCredential;
   auth().onAuthStateChanged(user => {
        userCredential = user;
    })
   return {userCredential}
}