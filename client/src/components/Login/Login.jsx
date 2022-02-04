import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";
// import validator from "../functions/validator";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const login = useSelector((state) => state.login);
  const [errors, setErrors] = useState({});

  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  const loginValidate = (form) => {
    let error = {};
    const emailRegExp =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (form.hasOwnProperty("email")) {
      if (form.email.length === 0) error.email = "Este campo es obligatorio";
      else if (emailRegExp.test(form.email) === false) {
        error.email = "Debe escribir un email válido";
      } else {
        //si cumple con todas las condiciones, seteo en blanco y no renderizará nada
        error.email = undefined;
      }
    }
    if (form.hasOwnProperty("password")) {
      if (form.password.length < 1)
        error.password = "Este campo es obligatorio";
      else if (form.password.split("").some((e) => e === " "))
        error.password = "No se admiten espacios en blanco";
      else error.password = undefined;
    }
    console.log("error validator", error);
    return error;
  };

  function handleChange(e) {
    setInput({
      ...input, //ademas de lo que tiene
      [e.target.name]: e.target.value, //agregale lo que el usuario pone
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    //si ambos campos están vacíos
    if (input.email === "" || input.password === "") {
      return setErrors(loginValidate(input));
    }
    //si las props de error poseen algun valor, haveError será true
    const haveError = Object.values(errors).some((v) => v !== undefined);

    if (haveError === false) {
      //dispatch(login(input));
      setInput({
        email: "",
        password: "",
      });
      alert("Ingresando...");
      navigate("/admin/home");
    } else alert("Corrija los errores de los campos");
  }

  function errorsHandler(e) {
    console.log("errorH", e.target.name);
    let form = { [e.target.name]: input[e.target.name] };
    let fails = loginValidate(form);
    setErrors((prev) => ({ ...prev, ...fails }));
  }
  console.log(errors);
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
            placeholder="Enter email address"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => errorsHandler(e)}
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
            onBlur={(e) => errorsHandler(e)}
          />
          {errors && <small>{errors.password}</small>}

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
      </form>
    </div>
  );
}
