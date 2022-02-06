import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { errorModal } from "../../../redux/actions";

import errS from "./error.module.css";
export default function Error({ msg }) {
  const dispatch = useDispatch();
  setInterval(() => {
    errorModal(dispatch, false);
  }, 3100);
  return (
    <div className={errS.container}>
      <div className={errS.box}>
        <h4>{msg}</h4>
      </div>
    </div>
  );
}
