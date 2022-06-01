import React, { useEffect, useState } from 'react';

const App = (): JSX.Element => {
  const [str, setStr] = useState<string>('');
  const [num, setNum] = useState<number>(0);

  const func = async () => {
    const b = await fetch('https://httpbin.org/get');
    const c = await b.json();
    return c;
  }

  useEffect(() => {
    func().then((r) => {
      const a = JSON.stringify(r);
      setStr(a);
    });
  }, [num]);

  return (
    <div>
      <p>{str}</p>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>숫자 늘리기</button>
    </div>
  );
};

export default App;
