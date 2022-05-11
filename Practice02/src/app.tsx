import React from 'react';

interface AppProps {
  propsString: string
};

const App = (props: AppProps): JSX.Element => {
  return (
    <div>
      {'Hello, World!'}
      {props.propsString}
    </div>
  )
}

export default App;
