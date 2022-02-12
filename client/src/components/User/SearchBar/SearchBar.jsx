import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName } from "../../../redux/actions";
import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a name to start the search");
    } else {
      dispatch(getProductsByName(name));
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
