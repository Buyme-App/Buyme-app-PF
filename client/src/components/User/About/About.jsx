import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.title}>About Us</div>
        <p>Hello! We are a group of full stack developers, taking the Henry bootcamp. As a final project we developed this ecommerce called <b>Buyme App</b>. We hope you enjoy it!</p>
        <span></span>
        <p>
          <span>📫 How to reach us:</span>
          <br />
          <br />
          <span className={styles.name}>Nicolás Edgardo Sammaritano</span>
          <br />
          <span>Linked In profile: linkedin.com/in/nicol%C3%A1s-sammaritano-4431a9215/</span>
          <br />
          <span>Email: nico_sammaritano@hotmail.com</span>
          <br />
          <br />
          <span className={styles.name}>Francisco Jiménez Benavides</span>
          <br />
          <span>Linked In profile: linkedin.com/in/gandhyman</span>
          <br />
          <span>Email: gandhycoder@gmail.com</span>
          <br />
          <br />
          <span className={styles.name}>Jose Ernesto Garcia</span>
          <br />
          <span>Linked In profile: linkedin.com/in/joseernestogarciadeveloper</span>
          <br />
          <span>Email: josernestogarcia609@gmail.com</span>
          <br />
          <br />
          <span className={styles.name}>Laura Brener: </span>
          <br />
          <span>Linked In profile: linkedin.com/in/laura-brener-dev/</span>
          <br />
          <span>Email: laubrener@gmail.com</span>
          <br />
          <br />
          <span className={styles.name}>Alejandro Willi</span>
          <br />
          <span>Linked In profile: linkedin.com/in/alejandro-willi</span>
          <br />
          <span>Email: alejandro.willi@icloud.com</span>
          <br />
          <br />
          <span className={styles.name}>Agustín Mariano Dalvit</span>
          <br />
          <span>Linked In profile: linkedin.com/in/agustindalvit</span>
          <br />
          <span>Email: agusdalvit@gmail.com</span>
          <br />
          <br />
          <span className={styles.name}>Lucas Gabriel Ferreira</span>
          <br />
          <span>Linked In profile: linkedin.com/in/lucasdevferreira</span>
          <br />
          <span>Email: lucasferreiraok@outlook.com</span>
          <br />
          <br />
          <span className={styles.name}>Victor Alfonso Rueda Madrid</span>
          <br />
          <span>Linked In profile: linkedin.com/in/victorrueda10</span>
          <br />
          <span>Email: vialruma1985@gmail.com</span>
        </p>
      </div>
      <Footer />
    </div>
  );
}
