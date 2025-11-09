import { useNavigate, useLocation, Link } from 'react-router-dom';
import { getUserFriendlyMessage, isVercelError, getVercelError } from '../utils/vercelErrors';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract error information from location state or URL params
  let errorCode = location.state?.errorCode || new URLSearchParams(location.search).get('code');
  const statusCode = location.state?.statusCode || new URLSearchParams(location.search).get('status');
  const errorMessage = location.state?.message;

  // Determine the error information
  let errorInfo = null;
  let userMessage = 'An unexpected error occurred. Please try again.';
  // Default to 404 if no status code provided (for catch-all route)
  let status = statusCode ? parseInt(statusCode) : 500;
  
  // If no error info and we're on a catch-all route, set to 404
  if (!errorCode && !statusCode && !errorMessage && location.pathname !== '/error') {
    status = 404;
    errorCode = 'NOT_FOUND';
  }

  if (errorCode) {
    errorInfo = getVercelError(errorCode);
    if (errorInfo) {
      userMessage = errorInfo.userMessage;
      status = errorInfo.status;
    } else if (isVercelError(errorCode)) {
      userMessage = getUserFriendlyMessage(errorCode);
    }
  } else if (statusCode) {
    userMessage = getUserFriendlyMessage(parseInt(statusCode));
  }

  // Use custom message if provided
  if (errorMessage) {
    userMessage = errorMessage;
  }

  // Get appropriate icon and color based on status code
  const getErrorStyle = (status) => {
    if (status >= 500) {
      return {
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        ),
        color: 'text-red-500',
        bgColor: 'bg-red-50',
      };
    } else if (status === 404) {
      return {
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        ),
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50',
      };
    } else if (status === 403 || status === 401) {
      return {
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        ),
        color: 'text-orange-500',
        bgColor: 'bg-orange-50',
      };
    } else {
      return {
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        ),
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
      };
    }
  };

  const errorStyle = getErrorStyle(status);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className={`${errorStyle.bgColor} rounded-lg shadow-lg p-8 md:p-12 text-center`}>
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mb-6"
          >
            <svg
              className={`mx-auto h-24 w-24 ${errorStyle.color}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {errorStyle.icon}
            </svg>
          </motion.div>

          {/* Error Code */}
          {errorCode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <span className="inline-block bg-white px-4 py-2 rounded-lg text-sm font-mono text-gray-700 shadow-sm">
                {errorCode}
              </span>
            </motion.div>
          )}

          {/* Status Code */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl font-bold text-gray-900 mb-4"
          >
            {status}
          </motion.h1>

          {/* Error Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-700 mb-8"
          >
            {userMessage}
          </motion.p>

          {/* Error Details (Development Only) */}
          {import.meta.env.DEV && errorInfo && (
            <motion.details
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8 text-left bg-white p-4 rounded-lg"
            >
              <summary className="cursor-pointer text-sm font-semibold text-gray-700 mb-2">
                Technical Details (Development Only)
              </summary>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  <strong>Category:</strong> {errorInfo.category}
                </p>
                <p>
                  <strong>Status Code:</strong> {errorInfo.status}
                </p>
                <p>
                  <strong>Technical Message:</strong> {errorInfo.message}
                </p>
              </div>
            </motion.details>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate(-1)}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-sm border border-gray-200"
            >
              Go Back
            </button>
            <Link
              to="/"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-sm"
            >
              Go Home
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium shadow-sm"
            >
              Refresh Page
            </button>
          </motion.div>

          {/* Help Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-gray-500"
          >
            If this problem persists, please{' '}
            <a
              href="https://vercel.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 underline"
            >
              contact support
            </a>
            .
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;

