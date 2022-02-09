import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions";
import styles from './AddCategories.module.css';

export default function SelectCategories (props) {

    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.allCategories);

    useEffect(() => {
        dispatch(getAllCategories());
    },[dispatch]);

    return (props.trigger) ? (
        <div>
            {props.children}
            <select className={styles.select}>
                {allCategories?.map(el => {
                    return(
                        <option value={el.id} key={el.id}>{el.name}</option>
                    )
                })
                }
            </select>
        </div>
    ) : '';
}