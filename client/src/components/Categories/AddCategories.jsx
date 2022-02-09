import React from "react";
import styles from './AddCategories.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import SelectCategories from "./SelectAddCategories";
import { createCategory, createSubcategory, getAllCategories } from "../../redux/actions";

export default function AddCategories (props){

    const dispatch = useDispatch();
    const [checkSubcat, setCheckSubcat] = useState(false);

    const [input, setInput] = useState({
        name: "",
        category: ""
    });
 
    function handleChange(e) {
        setInput({
        ...input, //ademas de lo que tiene
        [e.target.name]: e.target.value, //agregale lo que el usuario pone
        });
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        if (e.target.checked) {
            dispatch(createSubcategory(input));
            alert('Subcategory created successfully!');
        } else {
            dispatch(createCategory(input));
            alert('Category created successfully!');
        }
        setInput({
            name: "",
            category: ""
        });
        dispatch(getAllCategories());
        props.setTrigger(false);
    };

    console.log(input);
    function handleCheck(e){
        if (e.target.checked) {
            setCheckSubcat(true);
        } else {
            setCheckSubcat(false);
        }
    };

    function handleSelect(e){
        setInput({
            ...input,
            category: e.target.value
        })
    };

    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

    return (props.trigger) ?  (

        <div className={styles.popup}>
            {props.children}
            <form onSubmit={(e) => {handleSubmit(e)}} className={styles.form}>
                <button onClick={() => {props.setTrigger(false)}} className={styles.close} type="submit">x</button>
                <div className={styles.input}>
                    <label>Category/Subcategory</label>
                    <input 
                        type="text" 
                        value={input.name}
                        name="name"
                        placeholder="Enter new category"
                        onChange={(e) => {handleChange(e)}}
                    />
                </div>
                <div className={styles.input}>
                    <label>is Subcategory</label>
                    <input className={styles.checkbox}
                        type="checkbox" 
                        name="isSubcategory"
                        onClick={(e) => handleCheck(e)}
                    />
                </div>
                <SelectCategories
                    trigger={checkSubcat} 
                    setTrigger={setCheckSubcat}
                    name='category'
                    value={input.category}
                    onChange={(e) => {handleSelect(e)}}
                    >
                </SelectCategories>
                {/* <select className={styles.select} onChange={(e) => {handleSelect(e)}}>
                {allCategories?.map(el => {
                    return(
                        <option value={el.id} key={el.id}>{el.name}</option>
                    )
                })
                }
            </select> */}
                <button className={styles.btn} type="submit">
                    Submit
                </button>
            </form>
        </div>
    ): '';
}