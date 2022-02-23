import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllInvoices, getInvoiceByClient } from "../../../redux/actions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './MyOrders.module.css';

export default function MyOrders(){

    let client = JSON.parse(localStorage.getItem('cliente'));
    let ctm = client.result;
    const orders = useSelector((state) => state.clientInvoices);
    const ordersFiltered = orders.filter(el => el.products !== null);
    // const allProducts = orders.map(el => el.products);
    // const products = allProducts.filter(el => el !== null);
    // console.log(products);
    // const pro = products.map(el => el.map(el => el.id));
    // console.log(pro);
    console.log(orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInvoiceByClient(ctm.id));
    },[dispatch]);

    

    return (
        <div className={styles.page}>
            <Header></Header>
                <div>
                <h1 className={styles.title}>My Orders</h1>
                    {   
                        orders.length === 0?  <div className={styles.noOrd}>No purchases have been made</div> // no tiene ordenes hechas
                        :
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
                                    {
                                        ctm ? //hay un cliente logueado?
                                        orders?.map(el => { //si, entonces, tiene ordenes hechas?
                                            return ( //si, tiene ordenes hechas
                                                <tbody key={el.id}>
                                                    <tr className={styles.body}>
                                                        <td className={styles.item}>{el.id}</td>
                                                        <td className={styles.item}>{el.createdAt.slice(0, 10)}</td>
                                                        <td className={styles.item}></td>
                                                        <td className={styles.item}></td>
                                                        <td className={styles.item}></td>
                                                        <td className={styles.total}>${el.total}</td>
                                                    </tr>
                                                        {
                                                            ordersFiltered?.filter(o => o.products === el.products).map(p => p.products.map(e => {
                                                                return(
                                                                    <tr key={e.id}>
                                                                        <td className={styles.item}></td>
                                                                        <td className={styles.item}></td>
                                                                        <td className={styles.item}>{e.id}</td>
                                                                        <td className={styles.item}>{e.quantity}</td>
                                                                        <td className={styles.item}>${e.unit_price}</td>
                                                                        <td className={styles.total}></td>
                                                                    </tr>
        
                                                                )
                                                            }))
                                                        } 
                                                    </tbody>
                                        );
                                        }) : <div className={styles.notLog}>You have to log in to see your orders</div> //no esta loguedo
                                        
                                    } 
                                </table>
                            </div>
                        </div>
                        </div>
            }
                    </div>
            <Footer></Footer>
        </div>
    )
}

// return (
//     <div className={styles.page}>
//         <Header></Header>
//         <div>
//         <h1 className={styles.title}>My Orders</h1>
//             <div className={styles.box}>
//                 <div className={styles.container}>
//                     <div className={styles.table_container}>
//                     <table >
//                         <thead >
//                             <tr className={styles.thead}>
//                                 <th className={styles.th}>Order</th>
//                                 <th className={styles.th}>Date</th>
//                                 <th className={styles.th}>Products</th>
//                                 <th className={styles.th}>Units</th>
//                                 <th className={styles.th}>Price</th>
//                                 <th className={styles.totalTh}>Total</th>
//                             </tr>
//                         </thead>
//                         {
//                             ctm ? //hay un cliente logueado?
//                             orders.length? orders.map(el => { //si, entonces, tiene ordenes hechas?
//                                 return ( //si, tiene ordenes hechas
//                                     <tbody key={el.id}>
//                                         <tr className={styles.body}>
//                                             <td className={styles.item}>{el.id}</td>
//                                             <td className={styles.item}>{el.createdAt.slice(0, 10)}</td>
//                                             <td className={styles.item}></td>
//                                             <td className={styles.item}></td>
//                                             <td className={styles.item}></td>
//                                             <td className={styles.total}>${el.total}</td>
//                                         </tr>
//                                             {
//                                                 ordersFiltered?.filter(o => o.products === el.products).map(p => p.products.map(e => {
//                                                     return(
//                                                         <tr key={e.id}>
//                                                             <td className={styles.item}></td>
//                                                             <td className={styles.item}></td>
//                                                             <td className={styles.item}>{e.id}</td>
//                                                             <td className={styles.item}>{e.quantity}</td>
//                                                             <td className={styles.item}>${e.unit_price}</td>
//                                                             <td className={styles.total}></td>
//                                                         </tr>

//                                                     )
//                                                 }))
//                                             } 
//                                         </tbody>
//                             );
//                             }) : <div><span>No purchases have been made</span></div> // no tiene ordenes hechas
//                             : <div><span>You have to log in to see your orders</span></div> //no esta loguedo
//                         } 
//                     </table>
//                 </div>
//             </div>
//             </div>
//         </div>
//         <Footer></Footer>
//     </div>
// )
// }

   