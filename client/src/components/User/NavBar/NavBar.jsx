import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import DropdownMyAccount from './Dropdown';

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <Link className={styles.link} to="/">
        <div>Home</div>
      </Link>
      {/* <Link className={styles.link} to="/shop">
        <div>Shop</div>
      </Link> */}
      <DropdownMyAccount></DropdownMyAccount>
      <Link className={styles.link} to="/about">
        <div>About Us</div>
      </Link>
      <Link className={styles.link} to="/faq">
        <div>FAQ</div>
      </Link>
      <Link className={styles.link} to="/contact">
        <div>Contact Us</div>
      </Link>
    </div>
  );
}
