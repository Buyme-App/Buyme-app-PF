import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postEmail } from "../../../redux/actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Contact.module.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (!input.email) {
    errors.email = "Email is required";
  }
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(input.email.length > 0 && !validEmail.test(input.email)) {
        errors.email = 'Please enter a valid email'
    }
  if (!input.subject) {
    errors.subject = "Subject is required";
  }
  if (!input.text) {
    errors.text = "Message is required";
  }

  return errors;
}

export default function Contact() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      dispatch(postEmail(input));
      alert("Message sent successfully!!");
      setInput({
        name: "",
        email: "",
        subject: "",
        text: "",
      });
      history("/contact");
    } else {
      alert("Please review the form!");
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.title}>Contact Us</div>
        <p>
          Please leave us your thoughts, concerns or suggestions. We are always
          happy to hear from you!
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputs}>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder="Your name"
              className={styles.input}
              onChange={(e) => handleChange(e)}
              // required
            />
            <div className={styles.errors}>
              {errors.name && <span>{errors.name}</span>}
            </div>
          </div>
          <div className={styles.inputs}>
            <input
              type="text"
              value={input.email}
              name="email"
              placeholder="Your email"
              className={styles.input}
              onChange={(e) => handleChange(e)}
              // required
            />
            <div className={styles.errors}>
              {errors.email && <span>{errors.email}</span>}
            </div>
          </div>
          <div className={styles.inputs}>
            <input
              type="text"
              value={input.subject}
              name="subject"
              placeholder="Subject"
              className={styles.input}
              onChange={(e) => handleChange(e)}
              // required
            />
            <div className={styles.errors}>
              {errors.subject && <span>{errors.subject}</span>}
            </div>
          </div>
          <div className={styles.inputs}>
            <textarea
              value={input.text}
              name="text"
              placeholder="Your message"
              className={styles.textarea}
              onChange={(e) => handleChange(e)}
              // required
            />
            <div className={styles.errors}>
              {errors.text && <span>{errors.text}</span>}
            </div>
          </div>
          <div>
            <button type="submit" className={styles.button}>Send message</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
