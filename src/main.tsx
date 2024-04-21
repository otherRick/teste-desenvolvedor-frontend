import React from 'react';
import ReactDOM from 'react-dom/client';
import './global/styles.css';
import { Layout } from './components/Layout/Layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
