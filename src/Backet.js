import React, { useContext } from "react";
import { Context } from "./context/backet";

const Backet = () => {
  const [data, setData] = useContext(Context);

  return (
    <div>
      <h2>Bascket</h2>
      {data?.map((item, index) => (
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
    </div>
  );
};

export default Backet;
