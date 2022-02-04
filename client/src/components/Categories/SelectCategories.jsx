import React from "react";
import styles from './Categories.module.css';

export default function SelectCategories (props) {

    return (props.trigger) ? (
        <div>
            {props.children}
            <select className={styles.select}>
                <option value="cat1">categoria1</option>
            </select>
        </div>
    ) : '';
}