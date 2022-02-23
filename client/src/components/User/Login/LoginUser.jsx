import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LoginUser.module.css";
import { errorModal, loading, login, loginCustomer } from "../../../redux/actions";
import Loader from "../../Loader/Loader";
import Error from "../../Login/ErrorPopUp/Error";
import { LoginGoogle } from "../GoogleLogin/GoogleLogin";

export default function LoginUser() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);
  const customer = useSelector((state) => state.customer);
  
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    if (customer && customer !== []) { //que exista y que no este vacio
      localStorage.setItem('cliente', JSON.stringify(customer));
    } 
    if (customer && !customer[0]) { //si esta vacio
      JSON.parse(localStorage.getItem('cliente'));
    }
  },[customer]);

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

    return error;
  };

  function handleChange(e) {
    setInput({
      ...input, //ademas de lo que tiene
      [e.target.name]: e.target.value, //agregale lo que el usuario pone
    });
  }
  console.log(input);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginCustomer(input))
    setInput({
      email: "",
      password: ""
    }) 
    navigate("/myProfile");
    
  }

  function errorsHandler(e) {
    // console.log("errorH", e.target.name);
    let form = { [e.target.name]: input[e.target.name] };
    let fails = loginValidate(form);
    setErrors((prev) => ({ ...prev, ...fails }));
  }

  let currentCustomer = {
    firstName: 'Juan',
    lastName: 'Topo',
    email: 'jtopo33@gmail.com',
    address: 'Av Cabildo 2020, capital federal',
    phone: '11-5656-8787'
  }
  localStorage.setItem('cliente', JSON.stringify(currentCustomer));
  let client = JSON.parse(localStorage.getItem('cliente'));


  return (
    <div className={styles.gral}>
      {/* ---------loader-------- */}
      {globalState.loading && <Loader />}
      <div className={styles.form}>
        <h1 className={styles.title}>Log into your account</h1>
        <form
          onSubmit={(e) => {handleSubmit(e)}}
        >
          {/* --------error popup---------- */}
          {globalState.error && (
            <Error msg="An error occurred while validating the data" />
          )}
          <div className={styles.input}>
            {/* <label c>Email</label> */}
            <input
              className={styles.input}
              type="text"
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
          <div>
            {/* <label>Password</label> */}
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
            <div className={styles.restPassword}>
              <Link className={styles.link} to="/login/restorePassword">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className={styles.btns}>
            <button className={styles.btn} type="submit">
              Login
            </button>
            <span className={styles.or}>or</span>
              <LoginGoogle/>
          </div>
          <div className={styles.signUp}>
              <Link className={styles.link} to="/login/SignUp">
                Don't have an account? Sign up
              </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
