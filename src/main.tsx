import React from 'react';
import './index.css';
import App from './app';
import { createRoot } from 'react-dom/client';

// Type-safe root element selection
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element ('#root') not found");

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);