import React from "react";
import styles from "./Cards2.module.css";
import noimage from "../../../assets/imgdft.png";

export default function Cards({ name, price, offerPrice, image }) {
  return (
    <div className={styles.Card}>
      {image.length ? (
        <img
          src={`${image[0]}`}
          alt={`${name}`}
          className={styles.image}
          width={`230px`}
        />
      ) : (
        <img src={noimage} alt="not found" width="195px" height={`170px`} />
      )}
      <h3 className={styles.name}>{name}</h3>
      {!offerPrice ? (
        <div className={styles.currentregprice}>$ {price}</div>
      ) : (
        <div className={styles.bothprices}>
          <span className={styles.crossed}>$ {price}</span>
          <br />
          <span className={styles.currentofferprice}>$ {offerPrice}</span>
        </div>
      )}
    </div>
  );
}
