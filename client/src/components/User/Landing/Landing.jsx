import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import { getAllProducts } from '../../../redux/actions';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';
import InformativeBanner from '../Informative Banner/InformativeBanner';
import Slider from '../Slider/Main Banner/Slider';
import FeaturedProducts from '../Slider/Featured Products/FeaturedProducts'
import styles from './Landing.module.css';
import image1 from '../../../assets/compu4.jpg';
import imgdft from '../../../assets/imgdft.png';




export default function Landing(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts)
    const featuredProducts = products.filter( el => el.featured === true)

    useEffect(() => {
        dispatch(getAllProducts())
      },[dispatch])

    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.slider}>
            <Slider/>
            </div>
            <div className={styles.infobanner}>
                <InformativeBanner/>
            </div>
            <div>
                <h2>Featured Products</h2>
                  <FeaturedProducts/>
            </div>
            <Footer />
        </div>
    )
}
