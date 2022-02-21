import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../redux/actions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './MyOrders.module.css';

export default function MyOrders(){

    const customer = useSelector((state) => state.customer);
    const dispatch = useDispatch();

    let client = JSON.parse(localStorage.getItem('cliente'));

    return (
        <div>
            <div>
            <Header></Header>
            <h1 className={styles.title}>My Orders</h1>
            <div className={styles.box}>
                <div className={styles.container}>
                    <div className={styles.table_container}>
                        <table>
                            <thead >
                                <tr className={styles.thead}>
                                    <th className={styles.th}>Order</th>
                                    <th className={styles.th}>date</th>
                                    <th className={styles.th}>Price</th>
                                    <th className={styles.th}>Products</th>
                                    <th className={styles.th}>units</th>
                                    <th className={styles.th}>Total</th>
                                </tr>
                            </thead>

                            <tbody >
                                <tr className={styles.body}>
                                    <td className={styles.item}>#55478</td>
                                    <td className={styles.item}>20/02/22</td>
                                    <td className={styles.item}>$500000</td>
                                    <th className={styles.item}>MacBook Air</th>
                                    <th className={styles.item}>2</th>
                                    <th className={styles.item}>$1000000</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </div>
        </div>
    )
}