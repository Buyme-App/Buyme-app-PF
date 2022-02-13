import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";
import { errorModal, loading, login } from "../../redux/actions";
import Loader from "../Loader/Loader";
import Error from "./ErrorPopUp/Error";
import loginValidate from "./controllers/loginValidator";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);
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
        re
          ? (window.location.href = "/admin/home")
          : errorModal(dispatch, true);
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
    login(dispatch)
      .then((res) => {
        res ? navigate("/admin/home") : console.log("data.login es false", res);
      })
      .catch((err) => console.log("Error en useEffect Login", err));
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
    </div>
  );
}
