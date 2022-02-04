import React from "react";
import styles from './Categories.module.css';
import { Link } from "react-router-dom";

export default function Categories (){

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
        }
    };

    return (
        <div>
            <div> <Link to='/admin/home' ><button className={styles.btn}>Go back</button></Link></div>
            <h1 className={styles.title}>Categories</h1>
            <form onSubmit={(e) => {handleSubmit(e)}} className={styles.form}>
                
                <div className={styles.input}>
                    <label>Category/Subcategory</label>
                    <input 
                        type="text" 
                        value={input.category}
                        name="category"
                        placeholder="Enter category"
                        onChange={(e) => {handleChange(e)}}
                    />
                </div>
                <div className={styles.input}>
                    <label>Subcategory</label>
                    <input 
                        type="checkbox" 
                        value={input.subcategory}
                        name="subcategory"
                        onChange={(e) => {handleCheck(e)}}
                    />
                </div>
                
                <select className={styles.select}>
                    <option value="cat1">categoria1</option>
                </select>
                <button className={styles.btn} type="submit">
                Submit
                </button>
            </form>
        </div>
    )
}