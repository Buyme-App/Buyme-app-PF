import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Main Banner/Slider';
import FeaturedProducts from '../Slider/Featured Products/FeaturedProducts'
import styles from './Landing.module.css';
import SecondBanner from '../Second Banner/SecondBanner';




export default function Landing(){
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.slider}>
            <Slider/>
            </div>
            <div>
                <h2>Featured Products</h2>
                  <FeaturedProducts/>
            </div>
            <div>
                <Link className={styles.btnName} to= '/shop/'> 
                     <button className={styles.btnall}>View All Products</button>
                </Link>
            </div>
            <div>
                <SecondBanner/>
            </div>
            <Footer />
        </div>
    )
}
