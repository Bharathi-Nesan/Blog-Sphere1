import { useNavigate } from 'react-router-dom';
import { getUserFriendlyMessage, isVercelError, getVercelError } from './vercelErrors';
import toast from 'react-hot-toast';

/**
 * Custom hook for handling errors throughout the application
 * @returns {Object} Error handling functions
 */
export const useErrorHandler = () => {
  const navigate = useNavigate();

  /**
   * Handle an error and navigate to error page
   * @param {Error|string|number|Object} error - The error to handle
   * @param {Object} options - Additional options
   * @param {boolean} options.showToast - Whether to show a toast notification (default: true)
   * @param {boolean} options.navigateToErrorPage - Whether to navigate to error page (default: true)
   */
  const handleError = (error, options = {}) => {
    const {
      showToast = true,
      navigateToErrorPage = true,
    } = options;

    let errorCode = null;
    let statusCode = null;
    let message = null;

    // Extract error information
    if (typeof error === 'string') {
      errorCode = error;
      message = getUserFriendlyMessage(error);
    } else if (typeof error === 'number') {
      statusCode = error;
      message = getUserFriendlyMessage(error);
    } else if (error?.code) {
      errorCode = error.code;
      const errorInfo = getVercelError(error.code);
      message = errorInfo?.userMessage || error.message || getUserFriendlyMessage(error.code);
      statusCode = errorInfo?.status;
    } else if (error?.status) {
      statusCode = error.status;
      message = getUserFriendlyMessage(error.status);
    } else if (error?.message) {
      message = error.message;
    } else {
      message = 'An unexpected error occurred. Please try again.';
    }

    // Show toast notification
    if (showToast) {
      toast.error(message);
    }

    // Navigate to error page
    if (navigateToErrorPage) {
      navigate('/error', {
        state: {
          errorCode,
          statusCode,
          message,
        },
      });
    }

    return { errorCode, statusCode, message };
  };

  /**
   * Handle API errors (fetch/axios errors)
   * @param {Error|Response} error - The API error
   * @param {Object} options - Additional options
   */
  const handleApiError = async (error, options = {}) => {
    const {
      showToast = true,
      navigateToErrorPage = true,
    } = options;

    let errorCode = null;
    let statusCode = null;
    let message = null;

    // Handle fetch Response errors
    if (error?.status) {
      statusCode = error.status;
      errorCode = error.headers?.get('x-vercel-error-code');
      
      try {
        const errorData = await error.json().catch(() => ({}));
        message = errorData.message || getUserFriendlyMessage(statusCode);
      } catch {
        message = getUserFriendlyMessage(statusCode);
      }
    } else if (error?.response) {
      // Handle axios-like errors
      statusCode = error.response.status;
      errorCode = error.response.headers?.['x-vercel-error-code'];
      message = error.response.data?.message || getUserFriendlyMessage(statusCode);
    } else if (error instanceof Error) {
      message = error.message;
    } else {
      message = 'An unexpected error occurred. Please try again.';
    }

    // Show toast notification
    if (showToast) {
      toast.error(message);
    }

    // Navigate to error page
    if (navigateToErrorPage) {
      navigate('/error', {
        state: {
          errorCode,
          statusCode,
          message,
        },
      });
    }

    return { errorCode, statusCode, message };
  };

  /**
   * Handle Vercel-specific errors
   * @param {string} vercelErrorCode - The Vercel error code
   * @param {Object} options - Additional options
   */
  const handleVercelError = (vercelErrorCode, options = {}) => {
    const errorInfo = getVercelError(vercelErrorCode);
    
    if (!errorInfo) {
      console.warn(`Unknown Vercel error code: ${vercelErrorCode}`);
      return handleError('An unexpected error occurred. Please try again.', options);
    }

    return handleError({
      code: vercelErrorCode,
      status: errorInfo.status,
      message: errorInfo.userMessage,
    }, options);
  };

  return {
    handleError,
    handleApiError,
    handleVercelError,
  };
};

export default useErrorHandler;

