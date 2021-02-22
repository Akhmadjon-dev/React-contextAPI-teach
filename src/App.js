import { useState, createContext } from "react";
import Header from "./Header";
import List from "./List";
import BacketContext from "./context/backet";

import "./App.css";
import Backet from "./Backet";

function App() {
  const [data, setData] = useState([
    { title: "cocaCola", price: 2000 },
    { title: "fanta", price: 4000 },
    { title: "fanta", price: 4000 },
    { title: "fanta", price: 4000 },
    { title: "fanta", price: 4000 },
    { title: "fanta", price: 4000 },
  ]);
  const [isShow, setIsShow] = useState(false);

  return (
    <BacketContext>
      <div className="app">
        <Header />
        <button onClick={() => setIsShow(!isShow)}>Toggle bascket</button>
        {isShow ? <Backet /> : <List data={data} />}
      </div>
    </BacketContext>
  );
}

export default App;
