import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './AddUser.module.css';
import validator from "../../functions/validator";
import { postUser } from "../../../redux/actions";

export default function AddUser (props){
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    const [input, setInput] = React.useState({
        name: "",
        role: "",
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
        // console.log(input);
        dispatch(postUser(input));
        alert('User created successfully!');
        setInput({
            name: "",
            role: "",
            email: "",
            password: "",
        });
        //si ambos campos están vacíos
        if (Object.values(input).every((e) => e === ""))
        return setErrors(validator(input));
        //si las props de error poseen algun valor, haveError será true
        const haveError = Object.values(errors).some((v) => v !== undefined);

        // if (haveError === false) {
        // //dispatch(login(input));
        // alert("Ingresando...");

        // //navigate('/home');
        // } else alert("Corrija los errores de los campos");
        props.setTrigger(false)
    }
    
    function errorsHandler(e) {
        let form = { [e.target.name]: input[e.target.name] };
        let fails = validator(form);
        setErrors((prev) => ({ ...prev, ...fails }));
    };

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
                    <label>Role:</label>
                    <input 
                        type="text" 
                        value={input.role}
                        name="role"
                        placeholder="Enter role"
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
                
                <button className={styles.btn} type="submit">
                Submit
                </button>
            </form>
        </div>
    ) : '';
}