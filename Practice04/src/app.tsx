import React, { useEffect, useState } from 'react';

const App = (): JSX.Element => {
  const [num, setNum] = useState<number>(0);

  const a = () => {
    setNum((n) => n + 1);
  }

  useEffect(() => {
    const strDiv = document.getElementById('strDiv');
    console.log(num);
    strDiv?.addEventListener('click', a);
    return () => {
      strDiv?.removeEventListener('click',a);
    }
  });

  return (
    <div>
      <div id='strDiv'>{"str"}</div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>숫자 늘리기</button>
    </div>
  );
};

export default App;
