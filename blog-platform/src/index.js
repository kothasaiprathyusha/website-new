import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Web performance monitoring (optional)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function to log results
reportWebVitals();