import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import styles from "./AddUser.module.css";
import validator from "../../functions/validator";
import { postUser } from "../../../redux/actions";

import MyInput from "../../basics/myInput";

export default function AddUser(props) {
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
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
    dispatch(postUser(input));
    
    setInput({
      name: "",
      role: "",
      email: "",
      password: "",
    });
    //si los campos están vacíos
    if (Object.values(input).every((e) => e === "")) {
      alert("Corrija los errores de los campos", input);
      return;
    }

    props.setTrigger(false);
  }

  function errorsHandler(e) {
    let form = { [e.target.name]: input[e.target.name] };
    let fails = validator(form);
    setErrors((prev) => ({ ...prev, ...fails }));
  }

  //useEffect to update the render
  // React.useEffect(() => {
  //   return () => dispatch(getAllUsers());
  // },[]);

  return props.trigger ? (
    <div className={styles.popup}>
      {props.children}
      <form
        onSubmit={(e) =>  handleSubmit(e)}
        className={styles.form}
        defaultValue={input.role}
      >
        <div className={styles.divTitle}>
          <h1 className={styles.title}>Add New User</h1>
          <button
            className={styles.close}
            onClick={() => props.setTrigger(false)}
          >
            x
          </button>
        </div>
        <MyInput l='Name' t='text' v={input.name} n='name' p='Enter name' o= {handleChange}/>
               
        <div
          className={styles.input}
          onChange={e => handleChange(e)}
        >
          <label>Role:</label>
          <select name="role" id="role">
            <option value="">Select one</option>
            <option value="Administrador">Administrador</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Client">Client</option>
            <option value="Seller">Seller</option>
          </select>
        </div>
        
        <MyInput l='Email' t='text' v={input.email} n='email' p='Enter email' o= {handleChange} b={errorsHandler} />
        
        <MyInput l='Password' t='password' v={input.password} n='password' p='Enter password' o= {handleChange} />
      
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  ) : ("");
}
