import React from "react";
import validator from "../functions/validator";

import s from "./passRecovery.module.css";

export default function PassRecovery() {
  const [input, setInput] = React.useState({
    email: "",
  });
  const [errors, setErrors] = React.useState();

  const emailHandler = (value) => {
    setInput({
      email: value,
    });
    setErrors(validator(input));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.email === "") return setErrors(validator(input));
    //si tiene algun error este valor estará en true
    const haveError = Object.values(errors).some((v) => v !== undefined);

    if (haveError === false) {
      setInput({ email: "" });
      /* aqui agregar action para hacer el post del email */
      alert("Request sent");
    } else alert("Resuelva los errores en el campo antes de enviar");
  };
  return (
    <div className={s.main}>
      <div className={s.content}>
        <h1>Reset Password</h1>
        <p>
          Please enter your email address. We will send you an email to reset
          your password.
        </p>
        <div className={s.input}>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={input.email}
            onChange={(e) => emailHandler(e.target.value)}
            onBlur={(e) => emailHandler(e.target.value)}
          />{" "}
          {errors && <small>{errors.email}</small>}
        </div>

        <div className={s.button_div}>
          <input type="submit" value="Send" onClick={(e) => onSubmit(e)} />
        </div>
      </div>
    </div>
  );
}
