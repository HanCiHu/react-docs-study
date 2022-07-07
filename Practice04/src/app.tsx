import React, { useEffect, useState } from "react";

const App = (): JSX.Element => {
  const [num, setNum] = useState<number>(0);

  if (num == 0) {
    useEffect(() => {
      setNum1(num1 + 1);
    }, [num]);
  }

  const [num1, setNum1] = useState<number>(1);

  const add = () => {
    setNum(num + 1);
    setNum1(num1 + 1);
  };

  return (
    <div>
      <div id="strDiv">{"str"}</div>
      <p>{num}</p>
      <p>{num1}</p>
      <button onClick={add}>숫자 늘리기</button>
    </div>
  );
};

export default App;
