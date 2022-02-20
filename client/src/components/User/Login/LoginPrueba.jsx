import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LoginUser.module.css";
import { getCustomer } from "../../../redux/actions";
import { LoginGoogle } from "../GoogleLogin/GoogleLogin";

export default function LoginPrueba(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const customer = useSelector((state) => state.customer);
    

    const [input, setInput] = React.useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        setInput({
          ...input, //ademas de lo que tiene
          [e.target.name]: e.target.value, //agregale lo que el usuario pone
        });
    };
    console.log(input);
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log('soy',e.target.value);
        dispatch(getCustomer(input));
        console.log("customer:",customer);
        console.log('after',e.target.value);
        setInput({
            email: "",
            password: ""
        }) 
        navigate("/myProfile");
    
    };

    let currentCustomer = {
        firstName: 'Juan',
        lastName: 'Topo',
        email: 'jtopo33@gmail.com',
        address: 'Av Cabildo 2020, capital federal',
        phone: '11-5656-8787'
    }
    localStorage.setItem('cliente', JSON.stringify(currentCustomer));
    let client = JSON.parse(localStorage.getItem('cliente'));
    console.log(client);

    return (
        <div className={styles.form}>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label style={{'color': 'white'}}>Email</label>
                <br />
                <input className={styles.input}
                    type="text" 
                    value={input.email}
                    name="email"
                    placeholder="Enter email address"
                    onChange={(e) => {handleChange(e)}}/>
                <br />
                <label style={{'color': 'white'}}>Password</label>
                <br />
                <input className={styles.input}
                    type="password" 
                    value={input.password}
                    name="password"
                    placeholder="Enter password"
                    onChange={(e) => {handleChange(e)}}/>
                <br />
                <div className={styles.btns}>
                    <button className={styles.btn} type="submit">
                    Login
                    </button>
                    <span className={styles.or}>or</span>
                    <LoginGoogle/>
                </div>
            </form>
        </div>
    )
}