import React from "react";
import styles from './AddCategories.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { createCategory, createSubcategory, getAllCategories } from "../../redux/actions";

export default function AddCategories (props){

    const dispatch = useDispatch();
    const [disableSelect, setDisableSelect] = useState(true);
    const categories = useSelector((state) => state.allCategories);
    const nameCategories = categories.map(el => el.name);

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
        if (input.name.length === 0) return props.setTrigger(false); //para que no cree una categoria vacia
        if (nameCategories.includes(input.name)) {
            alert('Category already exist');
            props.setTrigger(false);
            return setInput({
                name: "",
                category: ""
            });
        } // para que no cree una categoria existente
        if (input.category) {
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
            setDisableSelect(false);
        } else {
            setDisableSelect(true);
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
                <div className={styles.btndiv}>
                <button onClick={() => {props.setTrigger(false)}} className={styles.close} type="submit">x</button>
                </div>
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
            
                <select className={styles.select} disabled={disableSelect} onChange={(e) => {handleSelect(e)}}>
                    <option value="categories">Categories:</option>
                {categories?.map(el => {
                    return(
                        <option value={el.id} key={el.id}>{el.name}</option>
                    )
                })
                }
                </select>
                <button className={styles.btn} type="submit">
                    Submit
                </button>
            </form>
        </div>
    ): '';
}