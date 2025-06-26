import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './ThemeContext.jsx'; // ✔ fixed
// main.jsx o index.js
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
