import styles from "./FP.module.css";
import img1 from "../../../../assets/compu4.jpg";

export default function FP(){
  return(
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={img1} alt="" />
      </div>
      <div className={styles.carousel}>
        <div className={styles.item}>
        <div className={styles.image}>
         <img src="" alt="shoe" />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>Macbook Pro</span>
          <span className={styles.oldPrice}>1000</span>
          <span className={styles.price}>500</span>


        </div>
        </div>

      </div>
    </div>
  )
}





