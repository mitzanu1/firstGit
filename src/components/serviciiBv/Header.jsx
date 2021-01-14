import React from 'react'
import firebase from '../../firebase/firebase'
import actions from '../../store/actions'
import styles from './index.module.scss'


const Header = () => {
    React.useEffect(() => {
        firebase.database().ref(`listaCategorii`)
          .once('value')
          .then((snap) => snap.val())
          .then((data) => actions.set('listData', data))
    },[])
    return (
        <div className={styles.header}>
            <h1>Portalul servicilor din Brasov</h1>
        </div>
    )
}

export default Header
