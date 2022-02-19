import React from "react";
import { useSelector } from "react-redux";
import styles from "./PopUpImage.module.css";
import imgdft from "../../../assets/imgdft.png";

export default function PopUpImage2(props) {
  const product = useSelector((state) => state.detail);

  return props.trigger ? (
    <div className={styles.box}>
      {props.children}
      <button className={styles.close} onClick={() => props.setTrigger(false)}>
        x
      </button>
      <img
        src={product[0].image[2] ? product[0].image[2] : imgdft}
        alt="img"
      />
    </div>
  ) : (
    ""
  );
}
