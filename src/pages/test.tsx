import React from "react";
import styles from "../styles/test.module.css";
const Test = () => {
  const [hello, setHello] = React.useState<string>("2021-08-08");
  const [change, setChange] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (change == true) setHello("2021-04-20");
  }, [change]);
  return (
    <div>
      hello this is date testing
      <input value={hello} type="date" onChange={() => {}}></input>
      <button onClick={() => setChange(true)}>click me to change date</button>
    </div>
  );
};

export default Test;
