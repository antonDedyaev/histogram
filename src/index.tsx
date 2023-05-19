import React from 'react';
import ReactDOM from 'react-dom/client';
import Chart from './Chart';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Chart />
  </React.StrictMode>
);
