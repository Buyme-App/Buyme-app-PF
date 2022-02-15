import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import logo from "../../../assets/logo.png";
import Cart from "../Cart/Cart";


export default function Header() {
  return (
    <div className={styles.header}>
      <Cart />
      <div className={styles.top}>Free shipping on orders over $6.000!</div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} width="200px" alt="" />
          </Link>
        </div>
        <SearchBar />
        <div className={styles.account}>
          <Link to={"/login"}>
            <span>My Account</span>
          </Link>
          <div className={styles.bag}>9</div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
