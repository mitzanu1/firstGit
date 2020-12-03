import React from 'react'
import {startFirebaseUI} from '../../auth/firebase.js'
import { mapUser } from '../../auth/auth'



const LoginWidget = () => {
   
      startFirebaseUI('#firebase-ui-auth')

    return (
        <div id='firebase-ui-auth'>
            
        </div>
    )
}

export default LoginWidget
