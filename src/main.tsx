console.log('🔥 main.tsx starting to load');

import React from 'react'
import { createRoot } from 'react-dom/client'

console.log('🔥 React imports loaded');

import './index.css'

console.log('🔥 CSS loaded');

import App from './App.tsx'

console.log('🔥 App imported');

const container = document.getElementById("root");
console.log('🔥 Container found:', container);

if (!container) {
  console.error('❌ Root element not found');
  throw new Error("Root element not found");
}

const root = createRoot(container);
console.log('🔥 Root created');

console.log('🔥 About to render App');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log('✅ App rendered successfully');
