import React from "react";
import { useDispatch } from "react-redux";
import styles from "./ChangeEmail.module.css";
import { getAllUsers, updateUser } from "../../../redux/actions";

import MyInput from "../../basics/myInput";

export default function ChangeEmail(props) {
  const dispatch = useDispatch()
  const [input, setInput] = React.useState({
    email: "",
    password: "",
    newEmail: "",
  });

  function handleChange(e) {
    setInput({
      ...input, //ademas de lo que tiene
      [e.target.name]: e.target.value, //agregale lo que el usuario pone
    });
  }

  function handleSubmit(e) {
    console.log('submit')
    e.preventDefault();

    dispatch(updateUser(dispatch, input))

    setInput({
      email: "",
      password: "",
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

        <MyInput l='Email' t='text' v={input.email} n='email' p='Enter email' o= {handleChange}/>

        {/* <div className={styles.input}>
          <label>Email:</label>
          <input type="text"
            value={input.email}
            name="email"
            placeholder="Enter email"
            onChange={(e) => handleChange(e)}
          />
        </div> */}

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
