import React, { useState } from 'react';
import ListComponent from '@src/listComponent';

/*

const App = (props: AppProps): JSX.Element => {
  return (
    <div>
      {'Hello, World!'}
      {props.propsString}
    </div>
  )
}
*/

interface AppProps {
  propsString: string
};

const App = ({ propsString }: AppProps): JSX.Element => {
  const [ numArray, setNumArray ] = useState<number[]>([1,2,3,4,5]);
  return (
    <div>
      <div>
        {'Hello, World!'}
        {propsString}
        <button onClick={() => setNumArray([0,1,2,3,4,5])}>배열 바꾸는 버튼</button>
      </div>
      <ListComponent array={numArray}/>
    </div>
  )
}

export default App;
