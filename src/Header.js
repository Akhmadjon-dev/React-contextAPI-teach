import React, { useContext } from "react";

import { Context } from "./context/backet";

const Header = () => {
  const [data, setData] = useContext(Context);

  return <div>Korzinka item: {data?.length}</div>;
};

export default Header;
