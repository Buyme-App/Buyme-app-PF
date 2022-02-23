import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import InformativeBanner from "../Informative Banner/InformativeBanner";
import Slider from "../Slider/Main Banner/Slider";
import FP from "../Slider/Sliderex/FP";
import styles from "./Landing.module.css";
import SecondBanner from "../Second Banner/SecondBanner";
import { useDispatch } from "react-redux";
import { getProductsClient } from "../../../redux/actions";

//sdf

export default function Landing() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("getProductClient ejecutado");
    dispatch(getProductsClient());
  }, [dispatch]);
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.slider}>
        <Slider />
      </div>
      <div className={styles.maintext}>
        <h1>Welcome to Smartech!</h1>
        <h2>
          In our online store you can find your favorite technological products
          without leaving your home. We ship worldwide and at the speed of
          light. With our personalized attention we will solve all your doubts
          and offer the security and tranquility that you deserve.
        </h2>
      </div>
      <div className={styles.infobanner}>
        <InformativeBanner />
      </div>
      <div>
        <FP />
      </div>
      <div>
        <Link className={styles.btnName} to="/shop">
          <button className={styles.btnall}>View All Products</button>
        </Link>
      </div>
      <div>
        <SecondBanner />
      </div>
      <Footer />
    </div>
  );
}
