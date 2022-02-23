import React from "react";
import BannerGif from "../../../assets/BannerGif.gif";
import styles from "./SecondBanner.module.css";
import {Link} from "react-router-dom"


export default function SecondBanner() {
    return (
        <div className={styles.main}>
        <Link to="/shop">
            <img src={BannerGif} alt="img" height="340px" width="100%"/>
            </Link>
            {/* <div>
                <button className={styles.btn}>Shop Now</button>
            </div> */}
        </div>
    )
}