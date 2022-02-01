import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";
import validator from "../functions/validator";

export default function Login() {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  //const login = useSelector((state) => state.login);
  const [errors, setErrors] = useState({});

  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({
      ...input, //ademas de lo que tiene
      [e.target.name]: e.target.value, //agregale lo que el usuario pone
    });
    setErrors(validator(input));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput({
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
  }

  // useEffect(() => {
  //     dispatch(Login());
  // }, []);

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Log into your account</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={styles.input}>
          <label>Email</label>
          <input
            type="text"
            value={input.email}
            name="email"
            placeholder="Enter Email adress"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {errors && <small>{errors.email}</small>}
        </div>
        <div className={styles.input}>
          <label>Password</label>
          <input
            type="password"
            value={input.password}
            name="password"
            placeholder="Enter Password"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => handleChange(e)}
          />
          {errors.password ? <small>{errors.password}</small> : null}

          <div className={styles.restPassword}>
            <h6>Forgot your</h6>
            <Link to="/admin/restorePassword" className={styles.link}>
              Password?
            </Link>
          </div>
        </div>
        <button className={styles.btn} type="submit">
          Login
        </button>

        <div className={styles.signUp}>
          <h6>Don't you have an account?</h6>
          <Link to="/signUp" className={styles.link}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
