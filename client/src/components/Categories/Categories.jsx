import React from "react";
import styles from './Categories.module.css';
import { useState } from "react";
import SelectCategories from "./SelectCategories";

export default function Categories (){

    const [checkSubcat, setCheckSubcat] = useState(false);

    const [input, setInput] = React.useState({
        category: "",
        subcategory: ""
    });

    function handleChange(e) {
        setInput({
        ...input, //ademas de lo que tiene
        [e.target.name]: e.target.value, //agregale lo que el usuario pone
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        // alert('user created successfully!');
        setInput({
            category: "",
            subcategory: ""
        });
    };

    function handleCheck(e){
        if (e.target.checked) {
            setInput({
                ...input,
                subcategory: e.target.value
                
            })
            setCheckSubcat(true);
        } else {
            setCheckSubcat(false);
        }
    };

    return (

        <div>

            {/* <h1 className={styles.title}>Categories</h1> */}
            <form onSubmit={(e) => {handleSubmit(e)}} className={styles.form}>
                
                <div className={styles.input}>
                    <label>Category</label>
                    <input 
                        type="text" 
                        value={input.category}
                        name="category"
                        placeholder="Enter new category"
                        onChange={(e) => {handleChange(e)}}
                    />
                </div>
                <div className={styles.input}>
                    <label>Subcategory</label>
                    <input className={styles.checkbox}
                        type="checkbox" 
                        value={input.subcategory}
                        name="subcategory"
                        onClick={(e) => handleCheck(e)}
                    />
                </div>
                <SelectCategories
                    trigger={checkSubcat} 
                    setTrigger={setCheckSubcat}>
                </SelectCategories>
                <button className={styles.btn} type="submit">
                Submit
                </button>
            </form>
        </div>
    )
}