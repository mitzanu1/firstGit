import React from 'react'
import { useSelector } from 'react-redux'
import actions from '../../store/actions'
import firebase from '../../firebase/firebase'
import styles from './index.module.scss'
import Card from '../../components/serviciiBv/Card'



const Main = () => {

    const listData = useSelector(()=> actions.get('listData',{}))
    const [cat, setCat] = React.useState('')
    const subcat = useSelector(()=> actions.get(`listData.${cat}`,{}))
    
    const getDBData = (subcat) => {
        firebase.database().ref(`categorii/${cat}/${subcat}`)
          .once('value')
          .then((snap) => snap.val())
          .then((data) => actions.set('data', data ))
    }

    const data = useSelector(()=>actions.get('data',{}))

    return (
        <div> 
            <h3>Categorii</h3>
            <div className={styles.catContainer}>
            {
                Object.values(listData).map((value)=>{
                    const { cat, id } = value
                    return(
                        <button 
                         className={styles.button}
                         onClick={()=>setCat(cat)}
                         key={id}>
                          {cat}
                        </button>
                    )
                })
            }
            </div>
            <div className={styles.catContainer}>
            {
                Object.values(subcat).map((value)=>{
                    const { subcat, id } = value
                    if (id) 
                    return <button 
                     className={styles.button}
                     key={id} 
                     onClick={()=>getDBData(subcat)}>
                      {subcat}
                    </button>
                    else return undefined
                })
            }
            </div>
            <div className={styles.cardContainer}>
                {
                    Object.values(data).map((value)=> {
                        const { id } = value
                        if(id) return <Card {...value} key={id}/>
                        else return undefined
                    })
                }
            </div>
        </div>
    )
}

export default Main
