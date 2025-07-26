import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('ErrorBoundary caught an error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary componentDidCatch:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center', 
          backgroundColor: '#f8f9fa',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ color: '#dc3545', marginBottom: '20px' }}>
            Erreur de l'Application
          </h1>
          <p style={{ marginBottom: '20px' }}>
            Une erreur s'est produite lors du chargement de l'application.
          </p>
          <details style={{ 
            marginBottom: '20px', 
            textAlign: 'left',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #dee2e6'
          }}>
            <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>
              Détails de l'erreur
            </summary>
            <pre style={{ 
              fontSize: '12px', 
              color: '#6c757d',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}>
              {this.state.error?.stack || this.state.error?.message || 'Erreur inconnue'}
            </pre>
          </details>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Recharger la page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}