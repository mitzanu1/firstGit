import firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'


const config = {
    apiKey: "AIzaSyDO-L0eThvhHWoHvGYMigwcCkM4WVFcy9o",
    authDomain: "test-project-6c2e8.firebaseapp.com",
    projectId: "test-project-6c2e8",
    storageBucket: "test-project-6c2e8.appspot.com",
    messagingSenderId: "98596978492",
    appId: "1:98596978492:web:051700a939bc040652e839"
}


const uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
           scopes: [
           'https://www.googleapis.com/auth/contacts.readonly'
           ],
           customParameters: {
           prompt: 'select_account'
            }
          },
          {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          scopes: [
          'public_profile',
          'email',
          'user_likes',
          'user_friends'
          ]
        },
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        tosUrl: '<your-tos-url>',
        privacyPolicyUrl: function() {
          window.location.assign('<your-privacy-policy-url>');
        }
      };

firebase.initializeApp(config)

const ui = new firebaseui.auth.AuthUI(firebase.auth())

export const startFirebaseUI = function (widget) {
  ui.start(widget, uiConfig)
}

startFirebaseUI('#firebase-ui-auth')


