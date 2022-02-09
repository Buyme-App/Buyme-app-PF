import React from 'react';
import styles from './NavBar.module.css';

export default function NavBar () {
    
    return (
    <div className={styles.nav}>
        <div>Home</div>
        <div>Shop</div>
        <div>About</div>
        <div>FAQ</div>
        <div>Contact</div>
    </div>
  )
}
