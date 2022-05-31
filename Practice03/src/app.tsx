import React, { useState } from 'react';

const App = (): JSX.Element => {
  const [num, setNum] = useState<number>(0);

  const addNum = (): void => {
    setNum(num + 1);
    setNum(num + 1);
  };

  return (
    <div>
      <p>{num}</p>
      <button onClick={addNum}>숫자 늘리기</button>
    </div>
  );
}

export default App;
