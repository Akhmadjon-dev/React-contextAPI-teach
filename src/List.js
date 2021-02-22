import React, { useContext, useState } from "react";
import { Context } from "./context/backet";

const List = ({ data: list }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useContext(Context);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([...data, { title: name, price }]);
  };
  return (
    <ul>
      <h2>LIst</h2>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setName(e.target.value)} />
        <input onChange={(e) => setPrice(e.target.value)} />
        <button>Add</button>
      </form>
      {list.map((item, index) => (
        <li key={index}>
          <p>
            Nomi:
            {item.title}
          </p>
          <p>
            Narxi:
            {item.price}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default List;
