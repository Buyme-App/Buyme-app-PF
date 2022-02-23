import React, { useRef, useEffect } from "react";
import FlechaDerecha from "../../../../assets/FlechaDerecha.png";
import FlechaIzquierda from "../../../../assets/FlechaIzquierda.png";
import styles from "./Slider.module.css"
import Banner1 from "../../../../assets/Banner1.png";
import Banner3 from "../../../../assets/Banner3.png";
import Banner4 from "../../../../assets/Banner4.png";


export default function SliderProducts() {

  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children && slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];

      slideshow.current.style.transition = '800ms ease-out all';

      const slideSize = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener('transitionend', transition);
      }

      slideshow.current.addEventListener('transitionend', transition);

    }
  }

  const back = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = 'none';

      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = '800ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      }, 30)
    }
  }
  useEffect(() => {
    // const interval = 
    setInterval(() => {
      next();
    }, 7000);

    //  slideshow.current.addEventListener('mouseenter', () => {
    //         clearInterval(interval);
    //  })
  }, []);

  return (
    <div className={styles.ContenedorPrincipal}>
      <div className={styles.ContenedorSlideShow} ref={slideshow}>

        <div className={styles.Slide}>
          <img src={Banner1} alt="img" height="380px" width="1265px" />
        </div>

        <div className={styles.Slide}>
          <img src={Banner4} alt="img" height="380px" width="1265px" />
        </div>

        <div className={styles.Slide}>
          <img src={Banner3} alt="img" height="380px" width="1265px" />
        </div>
      </div>

      <div className={styles.controles}>
        <button className={styles.btnIzq} onClick={back}>
          <img src={FlechaIzquierda} alt="img" height="40px" width="40px" />
        </button>
        <button className={styles.btnDer} onClick={next}>
          <img src={FlechaDerecha} alt="img" height="40px" width="40px" />
        </button>
      </div>
    </div>
  );
}

