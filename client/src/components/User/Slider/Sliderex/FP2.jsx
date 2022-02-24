import styles from "./FP.module.css";
import Left from "../../../../assets/left-arrow1.png";
import Right from "../../../../assets/right-arrow1.png";
import imgdft from "../../../../assets/imgdft.png";
import Cards from "../../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getAllProducts } from "../../../../redux/actions";
import { Link } from "react-router-dom";

export default function FP2() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const discountedProducts = products.filter((el) => el.offerPrice !== null);
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 230;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 230;
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={styles.gral}>
      <div className={styles.title}>Discounted Products</div>
      <div className={styles.container}>
        <div className={styles.carousel} ref={carousel}>
          {discountedProducts?.map((c) => {
            return (
              <Link
                onclick={window.scrollTo(0, 0)}
                className={styles.cart}
                to={"/product/" + c.id}
                key={c.id}
              >
                <Cards
                  image={c.image ? c.image : imgdft}
                  name={c.name}
                  price={c.price}
                  offerPrice={c.offerPrice}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.btn}>
        <button onClick={handleLeftClick} className={styles.btnIzq}>
          <img src={Left} alt="Scroll Left" height="35px" width="35px" />
        </button>
        <button onClick={handleRightClick} className={styles.btnDer}>
          <img src={Right} alt="Scroll Right" height="35px" width="35px" />
        </button>
      </div>
    </div>
  );
}
