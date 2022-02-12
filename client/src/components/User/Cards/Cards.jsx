import React from "react";
import styles from "./Cards.module.css";
import noimage from "../../../assets/imgdft.png";

export default function Cards({ name, price, image }) {
  return (
    <div className={styles.Card}>
      {/* <img src={image ? image : noimage} className={styles.imge} alt='img not found' width= "195px" height='170px'/> */}
      {image.length ? (
        <img
          src={`${image[0]}`}
          alt={`${name}`}
          className={styles.imge}
          width={`195px`}
          height={`170px`}
        />
      ) : (
        <img src={noimage} alt="not found" width="195px" height={`170px`} />
      )}
      <h3 className={styles.name}>{name}</h3>
      <h5 className={styles.price}>$ {price}</h5>
    </div>
  );
}
