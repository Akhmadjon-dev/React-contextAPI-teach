import React, { createContext, useState } from "react";

const Context = createContext();
const BacketContext = ({ children }) => {
  const [data, setData] = useState([
    { title: "cocaCola", price: 2000 },
    { title: "fanta", price: 4000 },
  ]);
  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
};

export { Context };

export default BacketContext;
