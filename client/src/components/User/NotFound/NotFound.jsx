import React from "react";
import styles from './NotFound.module.css';

export default function Loading(){
    return(
        <div className={styles.notfound}>
            <h2>Sorry, product not found :(
                <br/>
                <br/>
            Please try a different search</h2>
        </div>
    )
}
