import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import { getAllProducts } from '../../../redux/actions';
import Cards from '../Cards/Cards';
import styles from './Featured.module.css';
import imgdft from '../../../assets/imgdft.png';


export default function Featured(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts)
    const featuredProducts = products.filter(p => p.featured === true)

    useEffect(() => {
        dispatch(getAllProducts())
      },[dispatch])

    return (
        <div>
        <h2>Featured Products</h2>
          <div className={styles.main}>
               {
               featuredProducts?.map(c => {
                   return(
                   <Link className={styles.btnName} to= {'/product/detail' + c.id}  key={c.id}>
                       <Cards className={styles.grid} image={imgdft} name={c.name} price={c.price}/>
                    </Link>
                    );             
                })}
          </div>
        </div>
    )
}
