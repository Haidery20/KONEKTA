import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ErrorBoundaryProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function ErrorBoundary({ error, resetErrorBoundary }: ErrorBoundaryProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Something went wrong</h3>
          <p className="mt-2 text-sm text-gray-500">
            {error.message}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <RouterLink 
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4a5d4a] hover:bg-[#3d4d3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a5d4a]"
            onClick={resetErrorBoundary}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Home
          </RouterLink>
          <button
            onClick={resetErrorBoundary}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#4a5d4a] bg-white hover:bg-gray-50"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
