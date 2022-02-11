import React from "react";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/actions";
import styles from './PopAppDelete.module.css';

export default function PopAppDeleteCat (props) {

    const dispatch = useDispatch();

    function handleAccept(){
        // dispatch(deleteCategory(props.id));
        props.handleDeleteCat(props.id);
        dispatch(getAllCategories());
        props.setTrigger(false);
    };

    function handleCancel(){
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <div className={styles.page}>
            {props.children}
            <div className={styles.popApp}>
                <h3>Are you sure you want to delete?</h3>
                <button onClick={(e) => {handleAccept(e)}} className={styles.btn} type='submit'>Yes</button>
                <button onClick={(e) => {handleCancel(e)}} className={styles.btn} type='submit'>No</button>
            </div>
        </div>
    ) : '';
}