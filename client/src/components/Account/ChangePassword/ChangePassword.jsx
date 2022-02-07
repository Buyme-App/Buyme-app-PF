import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './ChangePassword.module.css'

export default function ChangePassword(props){
    // const navigate = useNavigate();

    const [input, setInput] = React.useState({
        email: "",
        password: "",
        newPassword: ""
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
            newPassword: ""
        });
        // navigate('');
    }

    return (props.trigger) ? (
        <div className={styles.popup}>
            {props.children}
            <form onSubmit={(e) => {handleSubmit(e)}} className={styles.form}>
                <div className={styles.divTitle}>
                <h1 className={styles.title}>Change Password</h1>
                <button className={styles.close} onClick={() => props.setTrigger(false)}>x</button>
                </div>
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
                    <label>New Password:</label>
                    <input 
                        type="password" 
                        value={input.newPassword}
                        name="newPassword"
                        placeholder="Enter new password"
                        onChange={(e) => {handleChange(e)}}
                    />
                    
                </div>
                <button onClick={() => props.setTrigger(false)} className={styles.btn} type="submit">
                Submit
                </button>
            </form>
        </div>
    ) : '';
}