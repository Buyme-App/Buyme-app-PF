import React, { useState, useEffect} from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import logo from '../../../assets/logo.png';
import DropdownMyAccount from '../MyAccount/Dropdown';
import Cart from "../Cart/Cart";
import { useSelector } from 'react-redux';

export default function Header() {

  const [btnChangeCart, setBtnChangeCart] = useState(false);
  const cartState = useSelector((state) => state.cart);

  
  const totalQuantity = cartState.map(el => el.amount)
  const numberBag = totalQuantity.reduce(function(a, b){
      return a + b;
    }, 0);



  return (
    <div className={styles.header}>
      <Cart
        trigger={btnChangeCart}
        setTrigger={setBtnChangeCart}
      />
      <div className={styles.top}>Free shipping on orders over $6.000!</div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} width="200px" alt="" />
          </Link>
        </div>
        <SearchBar />
        <div className={styles.account}>
          <DropdownMyAccount></DropdownMyAccount>
          {/* <Link to={"/login"}>
            <span>My Account</span>
          </Link> */}
          <div className={styles.bag}>
            <button className={styles.bagbtn} onClick={() => setBtnChangeCart(true)}>{numberBag}</button></div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
