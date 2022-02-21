import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getProductsByNameClients } from "../../../redux/actions";
import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    // e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a name to start the search");
    } else {
      dispatch(getProductsByNameClients(name));
      history('/search');
      setName("");
    }
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={name}
        className={styles.input}
        placeholder="Search by product name or part of it..."
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className={styles.go}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <BsSearch />
      </button>
    </div>
  );
}
