import React, { useState, useEffect} from 'react';
import styles from './Header2.module.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { useSelector } from 'react-redux';
import { FaLock  } from "react-icons/fa";

export default function Header2() {

  const [btnChangeCart, setBtnChangeCart] = useState(false);
  const cartState = useSelector((state) => state.cart);

  
  const totalQuantity = cartState.map(el => el.amount)
  const numberBag = totalQuantity.reduce(function(a, b){
      return a + b;
    }, 0);



  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} width="200px" alt="" />
          </Link>
        </div>
        <div className={styles.secure}>
          <FaLock size={24} />
          <span>SECURE WEBSITE</span>
        </div>
      </div>
    </div>
  );
}
