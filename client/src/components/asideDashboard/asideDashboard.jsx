import React from "react";
import styles from './asideDashboard.module.css';
import iconCat from "../../assets/IconoCategorias.png";
import iconHome from '../../assets/IconoHome.png';
import iconProd from '../../assets/IconoProductos.png';
import iconCus from '../../assets/IconoClientes.png';
import iconNP from '../../assets/IconoCrearProducto.png';
import iconQue from '../../assets/IconoConsultas.png';
import iconSale from '../../assets/IconoVentas.png';

export default function Aside(){

    return (
        <div className={styles.box}>
            <ul>
                <li><button className={styles.btn} type="submit"><img className={styles.iconH} src={iconHome} alt="icon"/><span>Home</span> </button></li>
                <li><button className={styles.btn} type="submit"><img className={styles.iconS} src={iconSale} alt="icon"/>Sales</button></li>
                <li><button className={styles.btn} type="submit"><img className={styles.iconNP} src={iconNP} alt="icon"/>New Product</button></li>
                <li><button className={styles.btn} type="submit"><img className={styles.iconP} src={iconProd} alt="icon"/>Products</button></li>
                <li><button className={styles.btn} type="submit"><img className={styles.iconCa} src={iconCat} alt="icon"/>Categories</button></li>
                <li><button className={styles.btn} type="submit"><img className={styles.iconCu} src={iconCus} alt="icon"/>Customers</button></li>
                <li><button className={styles.btn} type="submit"><img className={styles.iconQ} src={iconQue} alt="icon"/>Queries</button></li>
                <li><button className={styles.btn} type="submit">Account</button></li>
            </ul>
            <button className={styles.btn2} type="submit">Log out</button>
        </div>
    )
}