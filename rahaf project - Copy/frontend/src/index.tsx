import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css';
import App from './App.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement 
);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
