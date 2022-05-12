import React, { useState } from 'react';

const App = (): JSX.Element => {
  const [num, setNum] = useState<number>(0);

  return (
    <div>
      <p>{num}</p>
      <button onClick={()=> setNum(num + 1)}>숫자 늘리기</button>
    </div>
  )
}

export default App;
