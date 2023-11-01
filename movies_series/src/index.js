import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';

const root = document.getElementById('root');

const appRoot = createRoot(root);
appRoot.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);