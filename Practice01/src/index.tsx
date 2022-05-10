import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('there is no app element in document');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
