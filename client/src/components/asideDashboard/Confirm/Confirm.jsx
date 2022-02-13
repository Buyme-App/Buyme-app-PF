import React from "react";
import { useNavigate } from "react-router";
import { deleteToken } from "../../Login/controllers/tokenFunctions";
import style from "./confirm.module.css";

export default function Confirm(props) {
  const cancelHandler = () => {
    props.setActivateConfirm((prev) => !prev);
  };
  const acceptHandler = () => {
    deleteToken();
    window.location.replace("/admin");
    // navigate("/admin")
  };
  return (
    <div className={`${style.container} `}>
      <div className={style.confirm_box}>
        <h3>Are you sure?</h3>
        <ul>
          <li onClick={acceptHandler}>Accept</li>
          <li onClick={cancelHandler}>Cancel</li>
        </ul>
      </div>
    </div>
  );
}
