import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../redux/actions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './MyProfile.module.css';

export default function MyProfile(){

    const customer = useSelector((state) => state.customer);
    const dispatch = useDispatch();

    let client = JSON.parse(localStorage.getItem('cliente'));

    return (
        <div>
            <div>
            <Header></Header>
            <h1 className={styles.title}>My Profile</h1>
        {
            customer.length ? //si un customer se loggeo
                    <div className={styles.container}>
                        <div className={styles.box}>
                            <span className={styles.key}>Name</span>
                            <span className={styles.value}>{customer.firstName}</span>
                        </div>
                        <div className={styles.boxL}>
                            <span className={styles.key}>Lastname</span>
                            <span className={styles.value}>{customer.lastName}</span>
                        </div>
                        <div className={styles.boxE}>
                            <span className={styles.key}>Email</span>
                            <span className={styles.value}>{customer.email}</span>
                        </div>
                        <div className={styles.boxA}>
                            <span className={styles.key}>Address</span>
                            <span className={styles.value}>{customer.address}</span>
                        </div>
                        <div className={styles.boxP}>
                            <span className={styles.key}>Phone Number</span>
                            <span className={styles.value}>{customer.phone}</span>
                        </div>
                    </div>
            : //sino mostrame el cliente del local storage
            <div className={styles.container}>
                <div className={styles.box}>
                    <span className={styles.key}>Name</span>
                    <span className={styles.value}>{client.firstName}</span>
                </div>
                <div className={styles.boxL}>
                    <span className={styles.key}>Lastname</span>
                    <span className={styles.value}>{client.lastName}</span>
                </div>
                <div className={styles.boxE}>
                    <span className={styles.key}>Email</span>
                    <span className={styles.value}>{client.email}</span>
                </div>
                <div className={styles.boxA}>
                    <span className={styles.key}>Address</span>
                    <span className={styles.value}>{client.address}</span>
                </div>
                <div className={styles.boxP}>
                    <span className={styles.key}>Phone Number</span>
                    <span className={styles.value}>{client.phone}</span>
                </div>
            </div>
        }
        <Footer></Footer>
    </div>
        </div>
    )
}