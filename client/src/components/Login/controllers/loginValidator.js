//valida los campos del formulario nomás
export default function loginValidate(form) {
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
    if (form.password.length < 1) error.password = "Este campo es obligatorio";
    else if (form.password.split("").some((e) => e === " "))
      error.password = "No se admiten espacios en blanco";
    else error.password = undefined;
  }

  return error;
}
