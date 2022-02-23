import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../redux/actions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './MyProfile.module.css';

export default function MyProfile(){

    const customer = useSelector((state) => state.customer);
    const result = customer[1];
    console.log('customer', customer)
    let claves = Object.keys(customer); 
    for(let i=0; i< claves.length; i++){
        let clave = claves[1];
        console.log(customer[clave]);
    }
    
    const dispatch = useDispatch();

    //console.log(customer);
    let client = JSON.parse(localStorage.getItem('cliente'));
    let ctm = client.result;
    // console.log(client);

    return (
        <div className={styles.page}>
            <Header></Header>
            <div>
            <h1 className={styles.title}>My Profile</h1>
        {
            ctm ? //si un customer se loggeo
                <div className={styles.container}>
                    <div className={styles.box}>
                        <span className={styles.key}>Name</span>
                        <span className={styles.value}>{ctm.firstName}</span>
                    </div>
                    <div className={styles.boxL}>
                        <span className={styles.key}>Lastname</span>
                        <span className={styles.value}>{ctm.lastName}</span>
                    </div>
                    <div className={styles.boxE}>
                        <span className={styles.key}>Email</span>
                        <span className={styles.value}>{ctm.email}</span>
                    </div>
                    <div className={styles.boxA}>
                        <span className={styles.key}>Address</span>
                        <span className={styles.value}>{ctm.address}</span>
                    </div>
                    <div className={styles.boxP}>
                        <span className={styles.key}>Phone Number</span>
                        <span className={styles.value}>{ctm.phone}</span>
                    </div>
                </div>
            : 
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <span className={styles.text}>You have to log in to se your profile</span>
                </div>
            </div>
        }
    </div>
        <Footer/>
        </div>
    )
}