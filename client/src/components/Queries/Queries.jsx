import React from "react";
import sStyle from "../Sales/sales.module.css";
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
  const admins = ["admin1", "admin2", "admin3", "admin4", "admin5"];

  const [ejemplo, setEjemplo] = React.useState([...json]);
  const [reviewers, setReviewers] = React.useState([...admins]);
  const [selected, setSelected] = React.useState({});
  console.log("selecteeeed", selected);

  const onSelectChange = (e, value) => {
    let key = e.target.id;
    console.log(key);
    setSelected((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const assignHandler = (value) => {
    let reviewerAdded = ejemplo.map((e, index) => ({
      ...e,
      reviewer: selected[index],
    }));

    setEjemplo((prev) => [...reviewerAdded]);
  };

  return (
    <div className={styles.queries_box}>
      {/* <h1 className={styles.title}>Queries</h1> */}
      <div className={styles.container}>
        {/* -------------------- */}
        <div className={sStyle.table_container}>
          <table>
            <thead>
              <tr>
                <th>Reviewer</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
              </tr>
            </thead>

            <tbody>
              {ejemplo.length
                ? ejemplo.map((e, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className={styles.reviewer_box}>
                          <select
                            id={idx}
                            className={styles.check_input}
                            onChange={(e) => {
                              onSelectChange(e, e.target.value);
                            }}
                          >
                            <option value={null}></option>
                            {reviewers.map((a, id) => {
                              return (
                                <option key={id} value={a} id={id}>
                                  {a}
                                </option>
                              );
                            })}
                          </select>{" "}
                          <br />
                          <span className={styles.reviewer_span}>
                            {e.reviewer ? e.reviewer : null}
                          </span>
                        </div>
                      </td>

                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.phone}</td>
                      <td>{e.message}</td>
                      {/* <td>{e.customer}</td> */}
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
        <button
          className={styles.assign_btn}
          onClick={() => {
            assignHandler();
          }}
        >
          Assign
        </button>
      </div>
    </div>
  );
}
