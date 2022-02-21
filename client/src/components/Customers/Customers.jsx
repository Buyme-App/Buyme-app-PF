import React from "react";
import { FaSistrix, FaRedo } from "react-icons/fa";
import sStyle from "./Customers.module.css";
export default function Customers() {
  let example = [
    {
        order: "#053",
        name: "Jose Cuervo",
        email: "mezcal@gmail.com",
        phone: "+545935654898",
        spent: "$7.000",
        purchases: "4",
    },
    {
        order: "#013",
        name: "Mauro Derek",
        email: "mauro@gmail.com",
        phone: "+54378996288",
        spent: "$25.000",
        purchases: "11",
    },
    {
        order: "#006",
        name: "Camilo Leiva",
        email: "camilo@gmail.com",
        phone: "+3439593898,",
        spent: "$3.000",
        purchases: "1",
    },
    {
        order: "#005",
        name: "Fausto Paey",
        email: "fausto@gmail.com",
        phone: "+335593898",
        spent: "$10.000",
        purchases: "3",
    },
    {
        order: "#004",
        name: "Jose Perez",
        email: "joseperez@gmail.com",
        phone: "+545935654898",
        spent: "$7.000",
        purchases: "4",
    },
    {
        order: "#003",
        name: "Alain Prost",
        email: "alainprost@gmail.com",
        phone: "+9864536323",
        spent: "$12.000",
        purchases: "2",
    },
    {
        order: "#002",
        name: "Marcelo Tinelli",
        email: "marcelo@gmail.com",
        phone: "+9864536323",
        spent: "$17.000",
        purchases: "7",
    },
    {
        order: "#001",
        name: "Robert Zemeckis",
        email: "dickzem@gmail.com",
        phone: "+54378996288",
        spent: "$800",
        purchases: "1",
    },
  ];
  const [render, setRender] = React.useState(example);
  const [search, setSearch] = React.useState("");

  const orderByDate = (value) => {
    let order = render.sort((a, b) => {
      return (
        Number(b.order.substring(1, 10)) - Number(a.order.substring(1, 10))
      );
    });
    if (value === "Descendent") {
      setRender((prev) => [...order]);
    } else setRender([...order.reverse()]);
  };
  const searchHandler = (value) => {
    if (search.length) {
      setRender((prev) =>
        example.filter(
          (e) =>
            e.name.toUpperCase().includes(value.toUpperCase()) ||
            e.order.toUpperCase().includes(value.toUpperCase()) ||
            e.email.toUpperCase().includes(value.toUpperCase())
        )
      );
    } else alert("Search field empty");
  };
  const refreshHandler = () => {
    setRender(example);
  };
  //jj
  return (
      <div className={sStyle.container}>
        {/* <h1 className={sStyle.title}>Sales</h1> */}

        <div className={sStyle.input_box}>
          <div className={sStyle.input}>
            <input
              type="search"
              placeholder="Search by order#, customers name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchHandler(search)}
            />
            <FaSistrix
              className={sStyle.icon}
              onClick={() => searchHandler(search)}
            />
          </div>
          {!render.length ? (
            <h1 className={sStyle.notMatch}>No matches found</h1>
          ) : null}

          {/* -----------selects-------------- */}
          <div className={sStyle.selects_box}>
            <button className={sStyle.refresh} onClick={refreshHandler}>
              <FaRedo size={14} />
            </button>

            <select
              name="byDate"
              id=""
              onChange={(e) => orderByDate(e.target.value)}
            >
              <option value='Descendent'>Descendent by Order #</option>
              <option value='Ascendent'>Ascendent by Order #</option>
            </select>
          </div>
        </div>
        {/* ---------Tables--------- */}
        <div className={sStyle.table_container}>
          <table>
            <thead>
              <tr>
                <th>Latest order</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Total consumption</th>
                <th>Purchases</th>
              </tr>
            </thead>

            <tbody>
              {render.length
                ? render.map((e) => (
                    <tr key={e.order}>
                      <td>{e.order}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.phone}</td>
                      <td>{e.spent}</td>
                      <td>{e.purchases}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
  );
}
