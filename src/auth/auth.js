import firebase from 'firebase/app'
import 'firebase/auth'
import actions from '../store/actions'


export const mapUser = (user) => ({
  userId: user.uid,
  displayName: user.displayName || user.email,
  email: user.email,
  photoURL: user.photoURL,
  authenticated: true
})



    firebase.auth().onAuthStateChanged((user)=> {
        if(user) {
            const currentUser = firebase.auth().currentUser
            actions.set('auth', mapUser(currentUser))
            user.providerData.forEach(function (profile) {
                console.log("  Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
              })

        }else{
            actions.delete('auth')
        }
        
    })

export const logout = async () => {
  try {
    await firebase.auth().signOut()

  } catch (error) {
      console.log('logout error')
    }
}

export default firebase