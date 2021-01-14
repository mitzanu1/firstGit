import React from 'react'
import * as firebaseui from 'firebaseui'

const Login = () => {

    const uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
           prompt: 'select_account'
          },
          {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          },
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        tosUrl: '<your-tos-url>',
        privacyPolicyUrl: function() {
          window.location.assign('<your-privacy-policy-url>');
        }
      };
    
    
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    
    export const startFirebaseUI = function (widget) {
    ui.start(widget, uiConfig)
    }
    
    startFirebaseUI('#firebase-ui-auth')



    return (
        <div>
            
        </div>
    )
}

export default login
