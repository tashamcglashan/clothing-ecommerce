import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Add this
import './index.css'; // Import your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Add this wrapper */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
