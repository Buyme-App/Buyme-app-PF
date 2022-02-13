import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import styles from "./AddUser.module.css";
import validator from "../../functions/validator";
import { getAllUsers, postUser } from "../../../redux/actions";

export default function AddUser(props) {
  //const navigate = useNavigate();
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
    // alert('User created successfully!');
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

    dispatch(postUser(input));
    props.setTrigger(false);
  }

  function errorsHandler(e) {
    let form = { [e.target.name]: input[e.target.name] };
    let fails = validator(form);
    setErrors((prev) => ({ ...prev, ...fails }));
  }
  //useEffect to update the render
  React.useEffect(() => {
    return () => dispatch(getAllUsers());
  });

  return props.trigger ? (
    <div className={styles.popup}>
      {props.children}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
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
        <div className={styles.input}>
          <label>Name:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            placeholder="Enter name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div
          className={styles.input}
          onChange={(e) => {
            handleChange(e);
          }}
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
        <div className={styles.input}>
          <label>Email:</label>
          <input
            type="text"
            value={input.email}
            name="email"
            placeholder="Enter email"
            onChange={(e) => {
              handleChange(e);
            }}
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
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  ) : (
    ""
  );
}
