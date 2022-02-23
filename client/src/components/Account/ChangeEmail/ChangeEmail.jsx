import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ChangeEmail.module.css";
import { updateUser } from "../../../redux/actions";

import MyInput from "../../basics/myInput";

export default function ChangeEmail(props) {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    id: 0,
    name: "",
    password: "",
    email: "",
    role: "",
    status: "",
    newEmail: "",
  });

  function handleChange(e) {
    setInput({
      ...input, //ademas de lo que tiene
      [e.target.name]: e.target.value, //agregale lo que el usuario pone
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let user= props.users.find(e=>e.email===input.email)
    user.email = input.newEmail
    console.log('submit', user)
  

    dispatch(updateUser(dispatch, user))

    setInput({
      id: 0,
      name: "",
      password: "",
      email: "",
      role: "",
      status: "",
      newEmail: "",
    });

    props.setTrigger(false)
  }

  return props.trigger ? (
    <div className={styles.popup}>
      {props.children}
      <form onSubmit={(e) => handleSubmit(e)}
        className={styles.form}>
        <div className={styles.divTitle}>
          <h1 className={styles.title}>Change Email</h1>
          <button className={styles.close}
            onClick={() => props.setTrigger(false)}>
            x
          </button>
        </div>

        <MyInput l='Email' t='text' v={input.email} n='email' p='Enter email' o={handleChange}/>

        <div className={styles.input}>
          <label>Password:</label>
          <input
            type="password"
            value={input.password}
            name="password"
            placeholder="Enter password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.input}>
          <label>New Email:</label>
          <input
            type="text"
            value={input.newEmail}
            name="newEmail"
            placeholder="Enter new email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  ) : ("");
}
