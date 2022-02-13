import React from "react";
import { useDispatch } from "react-redux";
import styles from "./ChangeEmail.module.css";
import { getAllUsers } from "../../../redux/actions";

export default function ChangeEmail(props) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = React.useState({
    email: "",
    password: "",
    newEmail: "",
  });

  function handleChange(e) {
    setInput({
      ...input, //ademas de lo que tiene
      [e.target.name]: e.target.value, //agregale lo que el usuario pone
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // alert('user created successfully!');
    setInput({
      email: "",
      password: "",
      newEmail: "",
    });
    // navigate('/admin/home/account');
  }
  //useEffect to update the render
  React.useEffect(() => {
    return () => dispatch(getAllUsers());
  }, []);

  return props.trigger ? (
    <div className={styles.popup}>
      {props.children}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.form}
      >
        <div className={styles.divTitle}>
          <h1 className={styles.title}>Change Email</h1>
          <button
            className={styles.close}
            onClick={() => props.setTrigger(false)}
          >
            x
          </button>
        </div>

        <div className={styles.input}>
          <label>Email:</label>
          <input
            type="text"
            value={input.email}
            name="email"
            placeholder="Enter email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className={styles.input}>
          <label>Password:</label>
          <input
            type="password"
            value={input.password}
            name="password"
            placeholder="Enter password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className={styles.input}>
          <label>New Email:</label>
          <input
            type="text"
            value={input.newEmail}
            name="newEmail"
            placeholder="Enter new email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button
          onClick={() => props.setTrigger(false)}
          className={styles.btn}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  ) : (
    ""
  );
}
