import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { getAllProducts } from '../../../../redux/actions';
import { Link } from 'react-router-dom';
import styles from "./FeaturedProducts.module.css"
import Cards from "../../Cards/Cards"
import imgdft from '../../../../assets/imgdft.png';

export default function FeaturedProducts(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts)
    console.log(products)
    const featuredProducts = products.filter( el => el.featured === true)
    console.log(featuredProducts)

    useEffect(() => {
        dispatch(getAllProducts())
      },[dispatch])

    return(
        <div className={styles.grid}>
         {
          featuredProducts?.map(c => {
             return( 
               <Link className={styles.btnName} to= {'/product/' + c.id}  key={c.id}>
                 <Cards className={styles.grid} image={c.image? c.image : imgdft} name={c.name} price={c.price}/>
                    </Link>
               );             
             })} 
             
             </div>

)


}