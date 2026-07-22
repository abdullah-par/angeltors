import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
          <div className="w-full max-w-sm text-center">
            {/* Logo */}
            <img
              src="/images/Angeltors_logo.png"
              alt="Angeltors"
              className="h-9 w-auto mx-auto mb-8 object-contain"
            />

            {/* Main Card Container */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              {/* Minimal Icon */}
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 mx-auto mb-5">
                <AlertTriangle className="w-5 h-5 text-slate-700" />
              </div>

              {/* Title & Description */}
              <h1 className="text-xl font-bold tracking-tight text-angeltors-ink mb-2">
                Something went wrong
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-7">
                An unexpected error occurred while loading this page. Please try reloading or return home.
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={this.handleReset}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-angeltors-ink px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reload Page
                </button>

                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500 hover:text-angeltors-ink transition-colors py-1"
                >
                  <Home className="w-3.5 h-3.5" />
                  Return to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
