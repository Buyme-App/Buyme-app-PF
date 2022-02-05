import axios from "axios";
import { useNavigate } from "react-router";

export const LOGIN = "LOGIN";
// export const ACTION = "ACTION";
//estos son ejemplos
// export const firstAction = () => {};

export const login = async (dispatch, email, password) => {
  try {
    let credential = await axios.post("/login", {
      userEmail: email,
      userPassword: password,
    });
    console.log("credentials from action", credential);

    dispatch({
      type: LOGIN,
      payload: true,
    });
    return credential;
  } catch (error) {
    alert("Your credentials could not be validated");
    dispatch({
      type: LOGIN,
      payload: null,
    });
    console.log(error);
  }
};
