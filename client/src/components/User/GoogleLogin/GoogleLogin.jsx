import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginCustomer } from "../../../redux/actions";
import styles from "../Login/LoginUser.module.css";

// Id del usuario en la google console developers.
const clientId =
  "443144576490-k8m4imerk2v4jo8mof3qhddmdqdbp1pk.apps.googleusercontent.com";

export function LoginGoogle(userData) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Funcion onLoginSuccess que recibe los datos del login, los guarda en la variable y
  const onLoginSuccess = async (res) => {
    console.log("Success login with Google", res.profileObj);

    //Variable donde se almacenan los datos que google retorna.
    let data = res.profileObj;

    const { givenName, familyName, email, googleId } = await data;

    let obj = {
      // Informacion a enviar al back.
      firstName: givenName,
      lastName: familyName,
      email: email,
      googleId: googleId,
    };

    dispatch(loginCustomer(obj));
    navigate('/myProfile');
  };
  //update

  // Funcion onLoginFailire que recibe el error si no se pudo hacer login con google.
  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div>
      {
        // Componente del button login que da paso a la ventana de inicio de sesion.
        <GoogleLogin
          clientId={clientId}
          //buttonText="Sign In with Google"
          render={(renderProps) => (
            <button
              className={styles.btnGoogle}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img
                className={styles.google}
                src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                alt="logo Google"
              />
              Login with Google
            </button>
          )}
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      }
    </div>
  );
}
