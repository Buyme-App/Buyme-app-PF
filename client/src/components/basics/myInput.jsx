import React from "react";
import styles from './basics.module.css'

export default function MyInput({l,t, v, n, p, o, b }) {
    return (
   <div className={styles.input}>
        <label>{l}:</label>
        <input type={t}
          value={v}
          name={n}
          placeholder={p}
          onChange={(e) => o(e)}
          onBlur={(e) => b?b(e):null}
        />
   </div>)    
}