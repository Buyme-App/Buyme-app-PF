import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import { getAllProducts } from '../../../../redux/actions';
import { Link } from 'react-router-dom';
import styles from "./FeaturedProducts.module.css"
import Cards from "../../Cards/Cards"
import image1 from '../../../../assets/compu4.jpg';
import imgdft from '../../../../assets/imgdft.png';

export default function FeaturedProducts(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts)
    const featuredProducts = products.filter( el => el.featured === true)

    useEffect(() => {
        dispatch(getAllProducts())
      },[dispatch])

    return(
        <div className={styles.grid}>
        {/* {
          featuredProducts?.map(c => { */}
            {/* return( */}
             {/* <Link className={styles.btnName} to= {'/detail/' + c.id}  key={c.id}> */}
               <Cards className={styles.grid} image={image1} name="Macbook Pro" price="1500"/>
               <Cards className={styles.grid} image={image1} name="Macbook Air" price="1300"/>
               <Cards className={styles.grid} image={image1} name="Macbook" price="1000"/>
              
                {/* </Link>
               );             image={c.image? c.imag : imgdft} name={c.name} price={c.price}
             })} */}
             </div>

)


}