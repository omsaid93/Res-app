import React, { ReactNode, useState, useEffect } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);
  const [, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error("ErrorBoundary caught an error:", error);
      setError(error.error);
      setHasError(true);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error(
        "ErrorBoundary caught an unhandled promise rejection:",
        event
      );
      setError(new Error(event.reason));
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection
      );
    };
  }, []);

  const handleRetry = () => {
    setHasError(false);
    setError(null);
  };

  if (hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="error-boundary">
        <h2>Something went wrong</h2>
        <p>
          We're sorry, but something unexpected happened. Please try refreshing
          the page.
        </p>
        <button onClick={handleRetry} className="error-retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
