import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllInvoices, getCustomer } from "../../../redux/actions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './MyOrders.module.css';

export default function MyOrders(){

    const customer = useSelector((state) => state.customer);
    const orders = useSelector((state) => state.allInvoices);
    const products = orders.map(el => el.products);
    // const products = JSON.parse(productJson);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllInvoices());
    },[dispatch]);

    let client = JSON.parse(localStorage.getItem('cliente'));
    let ctm = client.result;
    const myOrders = orders.filter(el => el.clientId === ctm.id);

    return (
        <div>
            <div>
            <Header></Header>
            <h1 className={styles.title}>My Orders</h1>
            <div className={styles.box}>
                <div className={styles.container}>
                    <div className={styles.table_container}>
                    <table >
                        <thead >
                            <tr className={styles.thead}>
                                <th className={styles.th}>Order</th>
                                <th className={styles.th}>date</th>
                                <th className={styles.th}>Products</th>
                                <th className={styles.th}>units</th>
                                <th className={styles.th}>Price</th>
                                <th className={styles.totalTh}>Total</th>
                            </tr>
                        </thead>
                            {
                                ctm ? myOrders.map(el => {
                                    return (
                                            <tbody key={el.id}>
                                                <tr className={styles.body}>
                                                    <td className={styles.item}>{el.id}</td>
                                                    <td className={styles.item}>{el.date}</td>
                                                    <th className={styles.item}></th>
                                                    <th className={styles.item}></th>
                                                    <th className={styles.item}></th>
                                                    <td className={styles.total}>${el.total}</td>
                                                </tr>
                                                {
                                                    products.map(el => {
                                                        return(
                                                            <tr key={el.id}>
                                                                <th className={styles.item}></th>
                                                                <th className={styles.item}></th>
                                                                <th className={styles.item}>{el.name}</th>
                                                                <th className={styles.item}>{el.quantity}</th>
                                                                <th className={styles.item}>${el.price}</th>
                                                                <th className={styles.total}></th>
                                                            </tr>

                                                        )
                                                    })
                                                }
                                            </tbody>
                                    );
                                }) : <div><span>No purchases have been made</span></div>
                            } 
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </div>
        </div>
    )
}

    //     Object.entries(products).forEach(([key, value]) => {
    //         return(
    //             <tr key={value.id}>
    //                 <th className={styles.item}></th>
    //                 <th className={styles.item}></th>
    //                 <th className={styles.item}>{value.name}</th>
    //                 <th className={styles.item}>{value.quantity}</th>
    //                 <th className={styles.item}>${value.price}</th>
    //                 <th className={styles.total}></th>
    //             </tr>
    
    //         )
    //     })
    
    // 