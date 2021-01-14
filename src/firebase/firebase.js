import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
// import  actions from '../store/actions'

const {
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_databaseURL,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_appId,
  REACT_APP_measurementId
} = process.env

firebase.initializeApp({
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId,
  measurementId: REACT_APP_measurementId
})

// export const mapUser = (user) => ({
//   userId: user.uid,
//   displayName: user.displayName || user.email,
//   email: user.email,
//   photoURL: user.photoURL,
//   authenticated: true
// })



    // firebase.auth().onAuthStateChanged((user)=> {
    //     if(user) {
    //         const currentUser = firebase.auth().currentUser
    //         actions.set('auth', mapUser(currentUser))
    //     }else{
    //         actions.delete('auth')
    //     }
    // })



export default firebase


