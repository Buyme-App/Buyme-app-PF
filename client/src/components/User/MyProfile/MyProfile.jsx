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

    useEffect(() => {
        dispatch(getCustomer({
            email: "rosita@gmail.com"
        }));
    }, []);

    return (
        <div>
            <div>
            <Header></Header>
            <h1 className={styles.title}>My Profile</h1>
        {/* {
            customer ? customer.map(el => {
                return(
                    <div className={styles.container}>
                        <div className={styles.box}>
                            <span className={styles.key}>Name</span>
                            <span className={styles.value}>{el.firstName}</span>
                        </div>
                        <div className={styles.boxL}>
                            <span className={styles.key}>Lastname</span>
                            <span className={styles.value}>{el.lastName}</span>
                        </div>
                        <div className={styles.boxE}>
                            <span className={styles.key}>Email</span>
                            <span className={styles.value}>{el.email}</span>
                        </div>
                        <div className={styles.boxA}>
                            <span className={styles.key}>Address</span>
                            <span className={styles.value}>{el.address}</span>
                        </div>
                        <div className={styles.boxP}>
                            <span className={styles.key}>Phone Number</span>
                            <span className={styles.value}>{el.phone}</span>
                        </div>
                    </div>
                )
            }) :
            <div className={styles.container}>
                <div className={styles.box}>
                    <span className={styles.key}>Name</span>
                    <span className={styles.value}>Juan</span>
                </div>
                <div className={styles.boxL}>
                    <span className={styles.key}>Lastname</span>
                    <span className={styles.value}>Topo</span>
                </div>
                <div className={styles.boxE}>
                    <span className={styles.key}>Email</span>
                    <span className={styles.value}>jtopo22@gmail.com</span>
                </div>
                <div className={styles.boxA}>
                    <span className={styles.key}>Address</span>
                    <span className={styles.value}>Cabildo 2020, capital Federal</span>
                </div>
                <div className={styles.boxP}>
                    <span className={styles.key}>Phone Number</span>
                    <span className={styles.value}>11-5577-6699</span>
                </div>
            </div>
        } */}
        <div>
            <div className={styles.container}>
                <div className={styles.box}>
                    <span className={styles.key}>Name</span>
                    <span className={styles.value}>Juan</span>
                </div>
                <div className={styles.boxL}>
                    <span className={styles.key}>Lastname</span>
                    <span className={styles.value}>Topo</span>
                </div>
                <div className={styles.boxE}>
                    <span className={styles.key}>Email</span>
                    <span className={styles.value}>jtopo22@gmail.com</span>
                </div>
                <div className={styles.boxA}>
                    <span className={styles.key}>Address</span>
                    <span className={styles.value}>Cabildo 2020, capital Federal</span>
                </div>
                <div className={styles.boxP}>
                    <span className={styles.key}>Phone Number</span>
                    <span className={styles.value}>11-5577-6699</span>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
        </div>
    )
}