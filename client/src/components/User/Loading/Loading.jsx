import React from "react";
import styles from './Loading.module.css';

export default function Loading(){
    return(
        <div className={styles.loading}>
            <h2>Loading Products...</h2>
        </div>
    )
}
