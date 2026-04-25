import React, { Component, ErrorInfo, ReactNode } from 'react';

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-paper p-6 text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-serif mb-4 text-brand-ink">Ops! Algo deu errado.</h1>
            <p className="text-brand-ink mb-8">Ocorreu um erro inesperado. Por favor, tente recarregar a página.</p>
            <pre className="text-xs bg-red-50 p-4 rounded text-left overflow-auto mb-8 max-h-40">
              {this.state.error?.message}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-brand-ink text-brand-paper rounded-full font-bold"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
