import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SignUp.module.css";
import { createCustomer, errorModal, loading, login, loginCustomer } from "../../../../redux/actions";
import Loader from "../../../Loader/Loader";
import Error from "../../../Login/ErrorPopUp/Error";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);
  const customer = useSelector((state) => state.customer);
  const [errors, setErrors] = useState({});

  const [input, setInput] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });
  
  useEffect(() => {
    if (customer && customer !== []) { //que exista y que no este vacio
      localStorage.setItem('cliente', JSON.stringify(customer));
    } 
    if (customer && !customer[0]) { //si esta vacio
      JSON.parse(localStorage.getItem('cliente'));
    }
  },[customer]);

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
    if (form.hasOwnProperty("firstName")) {
      if (form.firstName.length < 1)
        error.firstName = "Este campo es obligatorio";
      else error.firstName = undefined;
    }
    if (form.hasOwnProperty("lastName")) {
      if (form.lastName.length < 1)
        error.lastName = "Este campo es obligatorio";
      else error.lastName = undefined;
    }

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
    dispatch(createCustomer(input));
    // dispatch(loginCustomer(input));
    alert('Sign up was successfully!');
    navigate('/');
    setInput({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
    })
  }

  function errorsHandler(e) {
    // console.log("errorH", e.target.name);
    let form = { [e.target.name]: input[e.target.name] };
    let fails = loginValidate(form);
    setErrors((prev) => ({ ...prev, ...fails }));
  }

  useEffect(() => {
    login(dispatch);
    loading(dispatch, false);
  }, []);

  return (
    <div className={styles.gral}>
      {/* ---------loader-------- */}
      {globalState.loading && <Loader />}
      <div className={styles.form}>
        <h1 className={styles.title}>Sign Up</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* --------error popup---------- */}
          {globalState.error && (
            <Error msg="An error occurred while validating the data" />
          )}
          <div className={styles.input}>
            <input
              className={styles.input}
              type="text"
              value={input.firstName}
              name="firstName"
              placeholder="Enter name"
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={(e) => errorsHandler(e)}
            />{" "}
            <br />
            {errors && <small>{errors.firstName}</small>}
          </div>
          <br />
          <div className={styles.input}>
            <input
              className={styles.input}
              type="text"
              value={input.lastName}
              name="lastName"
              placeholder="Enter lastname"
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={(e) => errorsHandler(e)}
            />{" "}
            <br />
            {errors && <small>{errors.lastName}</small>}
          </div>
          <br />
          <div className={styles.input}>
            <input
              className={styles.input}
              type="email"
              value={input.email}
              name="email"
              placeholder="Enter email address"
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={(e) => errorsHandler(e)}
            />{" "}
            <br />
            {errors && <small>{errors.email}</small>}
          </div>
          <br />
          <div className={styles.input}>
            <input
              className={styles.input}
              type="password"
              value={input.password}
              name="password"
              placeholder="Enter Password"
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={(e) => errorsHandler(e)}
            />{" "}
            <br />
            {errors && <small>{errors.password}</small>}
          </div>
          <button className={styles.btn} type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
