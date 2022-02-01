import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './Login.module.css';

export default function Login(){
    const dispatch = useDispatch();
    //const navigate = useNavigate();
    //const login = useSelector((state) => state.login);
    //const [errors, setErrors] = useState({});
 
    const [input, setInput] = React.useState({
        email:'',
        password:''
    });

    function handleChange(e){
        setInput({
            ...input, //ademas de lo que tiene 
            [e.target.name]: e.target.value //agregale lo que el usuario pone
        })
    };
    console.log(input);
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        //dispatch(login(input));
        alert(' created successfully!');
        setInput({
            email:'',
            password:'',
        })
        //navigate('/home');
    }; 

    // useEffect(() => {
    //     dispatch(Login());
    // }, []);

    return (
        <div className={styles.form}>
            <h1 className={styles.title}>Log into your account</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div className={styles.input}>
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={input.email}
                        name="email"
                        placeholder="Enter Email adress"
                        onChange={(e) => {handleChange(e)}} 
                    />
                </div>
                <div className={styles.input}>
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={input.password}
                        name="password"
                        placeholder="Enter Password"
                        onChange={(e) => {handleChange(e)}} 
                    />
                    <div className={styles.restPassword}>
                        <h6>Forgot your</h6>
                        <Link to='/restorePassword' className={styles.link} >Password?</Link>
                    </div>
                </div>
                <button className={styles.btn} type="submit">Login</button>
                
                <div className={styles.signUp}>
                    <h6>Don't you have an account?</h6>
                    <Link to='/signUp' className={styles.link} >Sign up</Link>
                </div>
            </form>
        </div>
    )
}