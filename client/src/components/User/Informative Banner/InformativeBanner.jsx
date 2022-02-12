import React from "react";
import styles from "./InformativeBanner.module.css";
import InfoBanner1 from "../../../assets/InfoBanner1.png";
import InfoBanner2 from "../../../assets/InfoBanner2.png";
import InfoBanner3 from "../../../assets/InfoBanner3.png";

export default function InformativeBanner() {
  return (
            <div className={styles.bannerdiv}>
             <img src={InfoBanner1} alt="img"  height="45px" width="45px" />
              <div className={styles.div1}>
             <h3>Free Shipping</h3>
             <h4>To your Door</h4>
             </div>             
                <img src={InfoBanner2} alt="img" height="40px" width="40px"/>
             <div className={styles.div2}>
                <h3>Local Pickup</h3>
                <h4>In Many Points</h4>
             </div>
               <img src={InfoBanner3} alt="img" height="40px" width="40px"/>
             <div className={styles.div3}>
               <h3>Secure Purchase</h3>
               <h4>Inside This Page</h4>
             </div>
            </div>
  )
}