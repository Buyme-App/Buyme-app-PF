import React from "react";
import BannerGif from "../../../assets/BannerGif.gif";
import styles from "./SecondBanner.module.css";


export default function SecondBanner() {
    return (
        <div className={styles.main}>
            <img src={BannerGif} alt="img" height="290px" width="1265px"/>
            <div>
                <button className={styles.btn}>Shop Now</button>
            </div>
        </div>
    )
}