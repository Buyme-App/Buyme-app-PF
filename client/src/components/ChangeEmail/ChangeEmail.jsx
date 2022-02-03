import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './ChangeEmail.module.css'

export default function ChangeEmail(){
    const navigate = useNavigate();

    const [input, setInput] = React.useState({
        email: "",
        password: "",
        newEmail: ""
    });

    function handleChange(e) {
        setInput({
        ...input, //ademas de lo que tiene
        [e.target.name]: e.target.value, //agregale lo que el usuario pone
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // alert('user created successfully!');
        setInput({
            email: "",
            password: "",
            newEmail: ""
        });
        navigate('/admin/home/account');
    }

    return (
        <div>
            <div> <Link to='/admin/home/account' ><button className={styles.btn}>Go back</button></Link></div>
            <h1 className={styles.title}>Change Email</h1>
            <form onSubmit={(e) => {handleSubmit(e)}} className={styles.form}>
                
                <div className={styles.input}>
                    <label>Email:</label>
                    <input 
                        type="text" 
                        value={input.email}
                        name="email"
                        placeholder="Enter email"
                        onChange={(e) => {handleChange(e)}}
                    />
                </div>
                <div className={styles.input}>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={input.password}
                        name="password"
                        placeholder="Enter password"
                        onChange={(e) => {handleChange(e)}}
                    />
                   
                </div>
                <div className={styles.input}>
                    <label>New Email:</label>
                    <input 
                        type="text" 
                        value={input.newEmail}
                        name="newEmail"
                        placeholder="Enter new email"
                        onChange={(e) => {handleChange(e)}}
                    />
                    
                </div>
                <button className={styles.btn} type="submit">
                Submit
                </button>
            </form>
        </div>
    )
}
