import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllInvoices } from "../../../redux/actions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './MyOrders.module.css';

export default function MyOrders(){

    let client = JSON.parse(localStorage.getItem('cliente'));
    let ctm = client.result;
    const orders = useSelector((state) => state.allInvoices);
    //const myOrders = orders.filter(el => el.clientId === ctm.id);
    

    // const products = orders.map(el => el.products);
    // console.log(products);
    

    
    // const products = JSON.parse(productJson);
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllInvoices());
    },[dispatch]);

    

    return (
        <div className={styles.page}>
            <Header></Header>
            <div>
            <h1 className={styles.title}>My Orders</h1>
        {
            ctm ? //hay un cliente logueado?
            // orders !== []? orders.map(el => { //si, entonces, tiene ordenes hechas?
            //     return ( //si, tiene ordenes hechas
                    <div className={styles.box}>
                        <div className={styles.container}>
                            <div className={styles.table_container}>
                            <table >
                                <thead >
                                    <tr className={styles.thead}>
                                        <th className={styles.th}>Order</th>
                                        <th className={styles.th}>Date</th>
                                        <th className={styles.th}>Products</th>
                                        <th className={styles.th}>Units</th>
                                        <th className={styles.th}>Price</th>
                                        <th className={styles.totalTh}>Total</th>
                                    </tr>
                                </thead>
                                            {/* <tbody key={el.id}>
                                                <tr className={styles.body}>
                                                    <td className={styles.item}>{el.id}</td>
                                                    <td className={styles.item}>{el.date}</td>
                                                    <th className={styles.item}></th>
                                                    <th className={styles.item}></th>
                                                    <th className={styles.item}></th>
                                                    <td className={styles.total}>${el.total}</td>
                                                </tr> */}
                                                {/* {
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
                                                } */}
                                            {/* </tbody> */}
                                </table>
                            </div>
                        </div>
                    </div>
            //    );
            //}) : <div><span>No purchases have been made</span></div> // no tiene ordenes hechas
            : <div><span>You have to log in to see your orders</span></div> //no esta loguedo
        } 
            </div>
            <Footer></Footer>
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