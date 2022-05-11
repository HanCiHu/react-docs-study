import React from 'react';
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
  const numArray = [1,2,3,4,5];
  return (
    <div>
      <div>
        {'Hello, World!'}
        {propsString}
      </div>
      <ListComponent array={numArray}/>
    </div>
  )
}

export default App;
