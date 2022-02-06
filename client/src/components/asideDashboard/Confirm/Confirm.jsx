import React from "react";
import { useNavigate } from "react-router";
import style from "./confirm.module.css";

export default function Confirm(props) {
  const navigate = useNavigate();
  const cancelHandler = () => {
    props.setActivateConfirm((prev) => !prev);
  };
  const acceptHandler = () => {
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
