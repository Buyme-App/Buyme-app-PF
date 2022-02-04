import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './AddUser.module.css';
import validator from "../functions/validator";

export default function AddUser (props){
    // const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [input, setInput] = React.useState({
        name: "",
        email: "",
        password: "",
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
            name: "",
            email: "",
            password: "",
        });
        //si ambos campos están vacíos
        if (Object.values(input).every((e) => e === ""))
        return setErrors(validator(input));
        //si las props de error poseen algun valor, haveError será true
        const haveError = Object.values(errors).some((v) => v !== undefined);

        if (haveError === false) {
        //dispatch(login(input));
        alert("Ingresando...");

        //navigate('/home');
        } else alert("Corrija los errores de los campos");
        // navigate('/admin/home/account');
    }

    function errorsHandler(e) {
        let form = { [e.target.name]: input[e.target.name] };
        let fails = validator(form);
        setErrors((prev) => ({ ...prev, ...fails }));
    }

    return (props.trigger) ? (
        <div className={styles.popup}>
            {props.children}
            <form onSubmit={(e) => {handleSubmit(e)}} className={styles.form}>
                <div className={styles.divTitle}>
                    <h1 className={styles.title}>Add New User</h1>
                    <button className={styles.close} onClick={() => props.setTrigger(false)}>x</button>
                </div>
                <div className={styles.input}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={input.name}
                        name="name"
                        placeholder="Enter name"
                        onChange={(e) => {handleChange(e)}}
                    />
                    
                </div>
                <div className={styles.input}>
                    <label>Email:</label>
                    <input 
                        type="text" 
                        value={input.email}
                        name="email"
                        placeholder="Enter email"
                        onChange={(e) => {handleChange(e)}}
                        onBlur={(e) => errorsHandler(e)}
                    />
                    {errors && <small>{errors.email}</small>}
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
                
                <button onClick={() => props.setTrigger(false)} className={styles.btn} type="submit">
                Submit
                </button>
            </form>
        </div>
    ) : '';
}