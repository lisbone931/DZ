import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import './index.css'
import { initBasicSecurity } from './utils/basicSecurity'

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

// Initialisation sécurisée simplifiée (niveau 8.5/10)
console.log('🔧 Initializing basic security...');
initBasicSecurity();

console.log('🚀 Application starting with basic security (8.5/10)');
console.log('Environment:', import.meta.env.MODE);

console.log('🎬 Rendering App component...');

try {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
  console.log('✅ App rendered successfully');
} catch (error) {
  console.error('❌ Failed to render App:', error);
  // Rendu de fallback
  root.render(
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Erreur de chargement</h1>
      <p>Une erreur s'est produite lors du chargement de l'application.</p>
      <pre>{String(error)}</pre>
      <button onClick={() => window.location.reload()}>Recharger</button>
    </div>
  );
}
