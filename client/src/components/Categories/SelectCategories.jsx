import React from "react";
import styles from './Categories.module.css';

export default function SelectCategories (props) {

    return (props.trigger) ? (
        <div>
            {props.children}
            <select className={styles.select}>
                <option value="phones">Phones</option>
                <option value="compu">Computers</option>
                <option value="tablets">Tablets</option>
                <option value="acces">Accesories</option>
                <option value="print">Printers</option>
                <option value="tvs">TVs</option>
            </select>
        </div>
    ) : '';
}