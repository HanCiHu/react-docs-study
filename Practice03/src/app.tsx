import React, { useEffect, useState } from 'react';

const App = (): JSX.Element => {
  const [str, setStr] = useState<string>('');

  const func = async () => {
    const b = await fetch('https://httpbin.org/get');
    const c = await b.json();
    return c;
  }

  // func().then((r) => {
  //   const a = JSON.stringify(r);
  //   setStr(a);
  // });

  useEffect(() => {
    func().then((r) => {
      const a = JSON.stringify(r);
      setStr(a);
    });
  });

  return (
    <div>
      <p>{str}</p>
    </div>
  );
};

export default App;
