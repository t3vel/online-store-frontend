import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/variables.css';
import './styles/index.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
