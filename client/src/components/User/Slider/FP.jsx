import styles from "../../../css/FP.module.css";
import Left from "../../../assets/left-arrow.png";
import Right from "../../../assets/right-arrow.png";
import imgdft from '../../../assets/imgdft.png';
import Cards from "../Cards/Cards"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getAllProducts } from '../../../redux/actions';
import { Link } from 'react-router-dom';

export default function FP() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.allProducts)
  const featuredProducts = products.filter(el => el.featured === true)
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <div className={styles.gral}>
      <div className={styles.container}>
        <div className={styles.carousel} ref={carousel}>
          {
            featuredProducts?.map(c => {
              return (
                <Link className={styles.cart} to={'/product/' + c.id} key={c.id}>
                  <Cards image={c.image ? c.image : imgdft} name={c.name} price={c.price} />
                </Link>
              );
            })}
        </div>
      </div>
      <div className={styles.btn}>
        <button onClick={handleLeftClick} className={styles.btnIzq}><img src={Left} alt="Scroll Left" height="70px" width="70px" /></button>
        <button onClick={handleRightClick} className={styles.btnDer}><img src={Right} alt="Scroll Right" height="70px" width="70px" /></button>

      </div>

      {/* <div className={styles.logo}>
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

      </div> */}
    </div>
  )
}





