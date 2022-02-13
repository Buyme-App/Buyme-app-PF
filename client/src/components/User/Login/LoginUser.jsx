import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LoginUser.module.css";
import { errorModal, loading, login } from "../../../redux/actions";
import Loader from "../../Loader/Loader";
import Error from "../../Login/ErrorPopUp/Error";

export default function LoginUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);
  const [errors, setErrors] = useState({});

  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });
  const [notValidated, setNotValidated] = React.useState(true);

  const setSession = (key, value) => {
    sessionStorage.setItem(key, value);
  };

  const getSession = (value) => {
    return sessionStorage;
  };

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

  function handleSubmit(e) {
    e.preventDefault();

    //si ambos campos están vacíos
    if (input.email === "" || input.password === "") {
      return setErrors(loginValidate(input));
    }

    //si las props de error poseen algun valor, haveError será true
    const haveError = Object.values(errors).some((v) => v !== undefined);

    if (haveError === false) {
      loading(dispatch, true);
      const credential = login(dispatch, input.email, input.password);
      credential.then((re) => {
        re ? navigate("/") : errorModal(dispatch, true);
      });
      // alert("Loading...");
    } else alert("There are still errors in the fields");
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
        <h1 className={styles.title}>Log into your account</h1>
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
              <Link className={styles.link} to="/home/restorePassword">
                Forgot your password?
              </Link>
            </div>
          </div>
          <button className={styles.btn} type="submit">
            Login
          </button>
          <div className={styles.signUp}>
              <Link className={styles.link} to="/home/SignUp">
                Don't have an account? Sign up
              </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
