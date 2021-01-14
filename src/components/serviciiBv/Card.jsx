import React from 'react'
import styles from './index.module.scss'
import gmapIco from '../../images/gmap.png'


const Card = (props) => {

    const {nume, adresa, gMapsUrl, siteUrl, id} = props
    const [modalVisible, setModalVisible] = React.useState(false)
    
    return (
        <div className={styles.card} key={id}>
            <h3>{nume}</h3>
            <div className={styles.adresa}>
                <p>{adresa}</p>
                <img
                 src={gmapIco}
                 alt=''
                 className={styles.gmap}
                 onClick={()=>setModalVisible(true)}>
                </img>
            </div>
            <button 
             type="submit"
             onClick={()=>window.open(`http://${siteUrl}`,'_blank')}>
                 {siteUrl}
            </button>
           {
           modalVisible && <div 
            className={styles.modal}
            onClick={()=>setModalVisible(false)}
            >
               <iframe src={gMapsUrl} title={id}></iframe>
               <button onClick={()=>setModalVisible(false)}>Inchide</button>
            </div>
            }
        </div>
    )
}

export default Card
