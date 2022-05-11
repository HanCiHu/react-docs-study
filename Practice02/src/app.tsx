import React from 'react';

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
  return (
    <div>
      {'Hello, World!'}
      {propsString}
    </div>
  )
}

export default App;
