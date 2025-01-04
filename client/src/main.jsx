import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Your main app component
import store from './features/store'; // Your Redux store

import './index.css'; // Tailwind CSS styles

// Render the application inside the root element
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router> {/* Wrap the app in Router for routing */}
      <App />
    </Router>
  </Provider>
);
