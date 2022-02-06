import React from "react";
import s from "./loader.module.css";
import { BallTriangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={s.loader}>
      <BallTriangle color="#fff" height={190} width={90} />
    </div>
  );
}
