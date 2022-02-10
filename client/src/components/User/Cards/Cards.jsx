import React from 'react';
import styles from './Cards.module.css';

export default function Cards({name, price,image}){
    return(

        <div className={styles.Card}>       
            <img className={styles.imge} src = {image} alt= 'img not found' width= "195px" height='170px'/>
            <h3 className={styles.name}>{name}</h3>
            <h5 className={styles.price}>$ {price}</h5>
        </div>
    )
}