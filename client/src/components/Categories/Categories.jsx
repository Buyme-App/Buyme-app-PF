import React from "react";
import { useState } from "react";
import styles from './Categories.module.css';
import AddCategories from "./AddCategories";

export default function Categories(){

    const [btnAddCat, setBtnAddCat] = useState(false);

    return (
        <div>
            <button onClick={() => setBtnAddCat(true)} className={styles.addCat} type="submit">Add Categories/Subcategories</button>
            <AddCategories
                    trigger={btnAddCat} 
                    setTrigger={setBtnAddCat}>
            </AddCategories>
                <div><button className={styles.btnCat} type="submit">Phones</button></div>
                <div><button className={styles.btnCat} type="submit">Computers</button></div>
                <div><button className={styles.btnCat} type="submit">Tablets</button></div>
                <div><button className={styles.btnCat} type="submit">Accesories</button></div>
                <div><button className={styles.btnCat} type="submit">Printers</button></div>
                <div><button className={styles.btnCat} type="submit">TVs</button></div>
        </div>
    )
};
