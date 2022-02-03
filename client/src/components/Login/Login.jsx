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

  function errorsHandler(e) {
    let form = { [e.target.name]: input[e.target.name] };
    let fails = validator(form);
    setErrors((prev) => ({ ...prev, ...fails }));
  }

  // useEffect(() => {
  //     dispatch(Login());
  // }, []);

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Log into your account</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={styles.input}>
          {/* <label c>Email</label> */}
          <input className={styles.input}
            type="text"
            value={input.email}
            name="email"
            placeholder="Enter email address"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => errorsHandler(e)}
          />
          {errors && <small>{errors.email}</small>}
        </div>
        <br/>
        <div>
          {/* <label>Password</label> */}
          <input className={styles.input}
            type="password"
            value={input.password}
            name="password"
            placeholder="Enter Password"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <div className={styles.restPassword}>
            <Link className={styles.link} to="/admin/restorePassword">
            Forgot your password?
            </Link>
          </div>
        </div>
        <button className={styles.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
