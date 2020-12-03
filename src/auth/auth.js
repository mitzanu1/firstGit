import firebase from 'firebase'
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
