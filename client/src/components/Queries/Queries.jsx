import React from "react";

import styles from "./queries.module.css";

export default function Queries() {
  const json = [
    {
      name: "Fausto Paey",
      email: "fausto@gmail.com",
      phone: "+335593898",
      date: "10 / 5 / 21",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, necessitatibus et magni consequuntur eius fugiat illum doloribus distinctio autem...",
    },
    {
      name: "Camilo Leiva",
      email: "camilo@gmail.com",
      phone: "+3439593898,",
      date: "10 / 5 / 21",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, necessitatibus et magni consequuntur eius fugiat illum doloribus distinctio autem...",
    },
    {
      name: "Jose Perez",
      email: "josePerez@gmail.com",
      phone: "+545935654898",
      date: "10 / 5 / 21",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, necessitatibus et magni consequuntur eius fugiat illum doloribus distinctio autem...",
    },
    {
      name: "Marcelo Tinelli",
      email: "marcelo@gmail.com",
      phone: "+9864536323",
      date: "10 / 5 / 21",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, necessitatibus et magni consequuntur eius fugiat illum doloribus distinctio autem...",
    },
    {
      name: "Mauro Derek",
      email: "mauro@gmail.com",
      phone: "+54378996288",
      date: "10 / 5 / 21",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, necessitatibus et magni consequuntur eius fugiat illum doloribus distinctio autem...",
    },
  ];

  const [ejemplo, setEjemplo] = React.useState([...json]);

  return (
    <div className={styles.queries_box}>
      {/* <h1 className={styles.title}>Queries</h1> */}
      <div className={styles.container}>
        <ul className={styles.ul_titles}>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Message</li>
        </ul>

        {ejemplo &&
          ejemplo.map((e, i) => {
            return (
              <ul className={styles.ul_file}>
                <li className={styles.li_file_name}>
                  <input type="checkbox" className={styles.check_input} />
                  <span>{e.name}</span>
                </li>
                <li>
                  <a href={`mailto: ${e.email}`}> {e.email}</a>
                </li>
                <li>{e.phone}</li>
                <li className={styles.li_message}>
                  <span>{e.date}</span>
                  <p>{e.message}</p>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}
