const validator = (form) => {
  const emailRegExp =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  //the transform is different to NaN?
  const haveNum = (value) => value.split("").some((v) => !isNaN(Number(v)));
  const haveUpper = (value) =>
    value.split("").some((v) => isNaN(v) && v === v.toUpperCase());
  const haveLower = (value) =>
    value.split("").some((v) => isNaN(v) && v === v.toLowerCase());
  const haveSpecialCaracter = (value) =>
    value.split("").some((v) => {
      let special = /\W/;
      return special.test(v);
    });

  let check = {};
  // validate username

  if (form.hasOwnProperty("email")) {
    if (form.email.length === 0) check.email = "Este campo es obligatorio";
    else if (emailRegExp.test(form.email) === false) {
      check.email = "Debe escribir un email válido";
    } else {
      //si cumple con todas las condiciones, seteo en blanco y no renderizará nada
      check.email = undefined;
    }
  }

  //validar password

  if (form.hasOwnProperty("password")) {
    if (form.password.length < 8)
      check.password = "La contraseña debe contener minimo 8 caractéres";
    else if (form.password.length > 15)
      check.password = "La contraseña no debe pasar los 15 caracteres";
    else if (haveNum(form.password) === false)
      check.password = "La contraseña debe contener un número";
    else if (!haveUpper(form.password))
      check.password = "La contraseña debe contener al menos una mayúscula";
    else if (!haveLower(form.password))
      check.password = "La contraseña debe contener minúsculas";
    else if (!haveSpecialCaracter(form.password))
      check.password =
        "La contraseña debe tener al menos un caracter especial (@, !, '...)";
    else check.password = undefined;
  }

  return check;
};

export default validator;
