/**
 * Vercel Error Code Mappings
 * Maps Vercel error codes to user-friendly messages and HTTP status codes
 */

export const VERCEL_ERROR_CODES = {
  // Application Errors
  BODY_NOT_A_STRING_FROM_FUNCTION: {
    code: 'BODY_NOT_A_STRING_FROM_FUNCTION',
    status: 502,
    category: 'Function',
    message: 'The function returned an invalid response format.',
    userMessage: 'Something went wrong while processing your request. Please try again.',
  },
  DEPLOYMENT_BLOCKED: {
    code: 'DEPLOYMENT_BLOCKED',
    status: 403,
    category: 'Deployment',
    message: 'Deployment has been blocked.',
    userMessage: 'This deployment is currently blocked. Please contact support.',
  },
  DEPLOYMENT_DELETED: {
    code: 'DEPLOYMENT_DELETED',
    status: 410,
    category: 'Deployment',
    message: 'Deployment has been deleted.',
    userMessage: 'This deployment no longer exists.',
  },
  DEPLOYMENT_DISABLED: {
    code: 'DEPLOYMENT_DISABLED',
    status: 402,
    category: 'Deployment',
    message: 'Deployment has been disabled.',
    userMessage: 'This deployment is currently disabled.',
  },
  DEPLOYMENT_NOT_FOUND: {
    code: 'DEPLOYMENT_NOT_FOUND',
    status: 404,
    category: 'Deployment',
    message: 'Deployment not found.',
    userMessage: 'The requested page could not be found.',
  },
  DEPLOYMENT_NOT_READY_REDIRECTING: {
    code: 'DEPLOYMENT_NOT_READY_REDIRECTING',
    status: 303,
    category: 'Deployment',
    message: 'Deployment is not ready, redirecting.',
    userMessage: 'The page is still being prepared. Please wait a moment.',
  },
  DEPLOYMENT_PAUSED: {
    code: 'DEPLOYMENT_PAUSED',
    status: 503,
    category: 'Deployment',
    message: 'Deployment is paused.',
    userMessage: 'This service is temporarily paused. Please check back later.',
  },
  DNS_HOSTNAME_EMPTY: {
    code: 'DNS_HOSTNAME_EMPTY',
    status: 502,
    category: 'DNS',
    message: 'DNS hostname is empty.',
    userMessage: 'There was an issue connecting to the server. Please try again.',
  },
  DNS_HOSTNAME_NOT_FOUND: {
    code: 'DNS_HOSTNAME_NOT_FOUND',
    status: 502,
    category: 'DNS',
    message: 'DNS hostname not found.',
    userMessage: 'The server could not be found. Please check your connection.',
  },
  DNS_HOSTNAME_RESOLVE_FAILED: {
    code: 'DNS_HOSTNAME_RESOLVE_FAILED',
    status: 502,
    category: 'DNS',
    message: 'DNS hostname resolution failed.',
    userMessage: 'Unable to connect to the server. Please try again later.',
  },
  DNS_HOSTNAME_RESOLVED_PRIVATE: {
    code: 'DNS_HOSTNAME_RESOLVED_PRIVATE',
    status: 404,
    category: 'DNS',
    message: 'DNS hostname resolved to private IP.',
    userMessage: 'The requested resource is not accessible.',
  },
  DNS_HOSTNAME_SERVER_ERROR: {
    code: 'DNS_HOSTNAME_SERVER_ERROR',
    status: 502,
    category: 'DNS',
    message: 'DNS server error.',
    userMessage: 'There was a server error. Please try again later.',
  },
  EDGE_FUNCTION_INVOCATION_FAILED: {
    code: 'EDGE_FUNCTION_INVOCATION_FAILED',
    status: 500,
    category: 'Function',
    message: 'Edge function invocation failed.',
    userMessage: 'A server error occurred. Please try again.',
  },
  EDGE_FUNCTION_INVOCATION_TIMEOUT: {
    code: 'EDGE_FUNCTION_INVOCATION_TIMEOUT',
    status: 504,
    category: 'Function',
    message: 'Edge function invocation timed out.',
    userMessage: 'The request took too long to process. Please try again.',
  },
  FALLBACK_BODY_TOO_LARGE: {
    code: 'FALLBACK_BODY_TOO_LARGE',
    status: 502,
    category: 'Cache',
    message: 'Fallback body is too large.',
    userMessage: 'The response is too large to process. Please contact support.',
  },
  FUNCTION_INVOCATION_FAILED: {
    code: 'FUNCTION_INVOCATION_FAILED',
    status: 500,
    category: 'Function',
    message: 'Function invocation failed.',
    userMessage: 'A server error occurred. Please try again.',
  },
  FUNCTION_INVOCATION_TIMEOUT: {
    code: 'FUNCTION_INVOCATION_TIMEOUT',
    status: 504,
    category: 'Function',
    message: 'Function invocation timed out.',
    userMessage: 'The request took too long to process. Please try again.',
  },
  FUNCTION_PAYLOAD_TOO_LARGE: {
    code: 'FUNCTION_PAYLOAD_TOO_LARGE',
    status: 413,
    category: 'Function',
    message: 'Function payload is too large.',
    userMessage: 'The data you\'re trying to send is too large. Please reduce the size.',
  },
  FUNCTION_RESPONSE_PAYLOAD_TOO_LARGE: {
    code: 'FUNCTION_RESPONSE_PAYLOAD_TOO_LARGE',
    status: 500,
    category: 'Function',
    message: 'Function response payload is too large.',
    userMessage: 'The server response is too large. Please contact support.',
  },
  FUNCTION_THROTTLED: {
    code: 'FUNCTION_THROTTLED',
    status: 503,
    category: 'Function',
    message: 'Function is being throttled.',
    userMessage: 'Too many requests. Please wait a moment and try again.',
  },
  INFINITE_LOOP_DETECTED: {
    code: 'INFINITE_LOOP_DETECTED',
    status: 508,
    category: 'Runtime',
    message: 'Infinite loop detected.',
    userMessage: 'A processing error occurred. Please refresh the page.',
  },
  INVALID_IMAGE_OPTIMIZE_REQUEST: {
    code: 'INVALID_IMAGE_OPTIMIZE_REQUEST',
    status: 400,
    category: 'Image',
    message: 'Invalid image optimization request.',
    userMessage: 'The image request is invalid. Please check the image URL.',
  },
  INVALID_REQUEST_METHOD: {
    code: 'INVALID_REQUEST_METHOD',
    status: 405,
    category: 'Request',
    message: 'Invalid request method.',
    userMessage: 'The request method is not allowed.',
  },
  MALFORMED_REQUEST_HEADER: {
    code: 'MALFORMED_REQUEST_HEADER',
    status: 400,
    category: 'Request',
    message: 'Malformed request header.',
    userMessage: 'The request is invalid. Please try again.',
  },
  MICROFRONTENDS_MIDDLEWARE_ERROR: {
    code: 'MICROFRONTENDS_MIDDLEWARE_ERROR',
    status: 500,
    category: 'Function',
    message: 'Microfrontends middleware error.',
    userMessage: 'A server error occurred. Please try again.',
  },
  MICROFRONTENDS_MISSING_FALLBACK_ERROR: {
    code: 'MICROFRONTENDS_MISSING_FALLBACK_ERROR',
    status: 400,
    category: 'Function',
    message: 'Microfrontends missing fallback error.',
    userMessage: 'A configuration error occurred. Please contact support.',
  },
  MIDDLEWARE_INVOCATION_FAILED: {
    code: 'MIDDLEWARE_INVOCATION_FAILED',
    status: 500,
    category: 'Function',
    message: 'Middleware invocation failed.',
    userMessage: 'A server error occurred. Please try again.',
  },
  MIDDLEWARE_INVOCATION_TIMEOUT: {
    code: 'MIDDLEWARE_INVOCATION_TIMEOUT',
    status: 504,
    category: 'Function',
    message: 'Middleware invocation timed out.',
    userMessage: 'The request took too long to process. Please try again.',
  },
  MIDDLEWARE_RUNTIME_DEPRECATED: {
    code: 'MIDDLEWARE_RUNTIME_DEPRECATED',
    status: 503,
    category: 'Runtime',
    message: 'Middleware runtime is deprecated.',
    userMessage: 'This feature is no longer supported. Please contact support.',
  },
  NO_RESPONSE_FROM_FUNCTION: {
    code: 'NO_RESPONSE_FROM_FUNCTION',
    status: 502,
    category: 'Function',
    message: 'No response from function.',
    userMessage: 'The server did not respond. Please try again.',
  },
  NOT_FOUND: {
    code: 'NOT_FOUND',
    status: 404,
    category: 'Deployment',
    message: 'Resource not found.',
    userMessage: 'The page you\'re looking for doesn\'t exist.',
  },
  OPTIMIZED_EXTERNAL_IMAGE_REQUEST_FAILED: {
    code: 'OPTIMIZED_EXTERNAL_IMAGE_REQUEST_FAILED',
    status: 502,
    category: 'Image',
    message: 'Optimized external image request failed.',
    userMessage: 'Failed to load the image. Please try again.',
  },
  OPTIMIZED_EXTERNAL_IMAGE_REQUEST_INVALID: {
    code: 'OPTIMIZED_EXTERNAL_IMAGE_REQUEST_INVALID',
    status: 502,
    category: 'Image',
    message: 'Optimized external image request is invalid.',
    userMessage: 'The image request is invalid. Please check the image URL.',
  },
  OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED: {
    code: 'OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED',
    status: 502,
    category: 'Image',
    message: 'Optimized external image request is unauthorized.',
    userMessage: 'You don\'t have permission to access this image.',
  },
  OPTIMIZED_EXTERNAL_IMAGE_TOO_MANY_REDIRECTS: {
    code: 'OPTIMIZED_EXTERNAL_IMAGE_TOO_MANY_REDIRECTS',
    status: 502,
    category: 'Image',
    message: 'Too many redirects for optimized external image.',
    userMessage: 'Failed to load the image due to too many redirects.',
  },
  RANGE_END_NOT_VALID: {
    code: 'RANGE_END_NOT_VALID',
    status: 416,
    category: 'Request',
    message: 'Range end is not valid.',
    userMessage: 'The request range is invalid.',
  },
  RANGE_GROUP_NOT_VALID: {
    code: 'RANGE_GROUP_NOT_VALID',
    status: 416,
    category: 'Request',
    message: 'Range group is not valid.',
    userMessage: 'The request range is invalid.',
  },
  RANGE_MISSING_UNIT: {
    code: 'RANGE_MISSING_UNIT',
    status: 416,
    category: 'Request',
    message: 'Range is missing unit.',
    userMessage: 'The request range is invalid.',
  },
  RANGE_START_NOT_VALID: {
    code: 'RANGE_START_NOT_VALID',
    status: 416,
    category: 'Request',
    message: 'Range start is not valid.',
    userMessage: 'The request range is invalid.',
  },
  RANGE_UNIT_NOT_SUPPORTED: {
    code: 'RANGE_UNIT_NOT_SUPPORTED',
    status: 416,
    category: 'Request',
    message: 'Range unit is not supported.',
    userMessage: 'The request range format is not supported.',
  },
  REQUEST_HEADER_TOO_LARGE: {
    code: 'REQUEST_HEADER_TOO_LARGE',
    status: 431,
    category: 'Request',
    message: 'Request header is too large.',
    userMessage: 'The request is too large. Please try again.',
  },
  RESOURCE_NOT_FOUND: {
    code: 'RESOURCE_NOT_FOUND',
    status: 404,
    category: 'Request',
    message: 'Resource not found.',
    userMessage: 'The requested resource could not be found.',
  },
  ROUTER_CANNOT_MATCH: {
    code: 'ROUTER_CANNOT_MATCH',
    status: 502,
    category: 'Routing',
    message: 'Router cannot match route.',
    userMessage: 'Unable to process the request. Please try again.',
  },
  ROUTER_EXTERNAL_TARGET_CONNECTION_ERROR: {
    code: 'ROUTER_EXTERNAL_TARGET_CONNECTION_ERROR',
    status: 502,
    category: 'Routing',
    message: 'Router external target connection error.',
    userMessage: 'Connection error. Please try again.',
  },
  ROUTER_EXTERNAL_TARGET_ERROR: {
    code: 'ROUTER_EXTERNAL_TARGET_ERROR',
    status: 502,
    category: 'Routing',
    message: 'Router external target error.',
    userMessage: 'A routing error occurred. Please try again.',
  },
  ROUTER_EXTERNAL_TARGET_HANDSHAKE_ERROR: {
    code: 'ROUTER_EXTERNAL_TARGET_HANDSHAKE_ERROR',
    status: 502,
    category: 'Routing',
    message: 'Router external target handshake error.',
    userMessage: 'Connection error. Please try again.',
  },
  ROUTER_TOO_MANY_HAS_SELECTIONS: {
    code: 'ROUTER_TOO_MANY_HAS_SELECTIONS',
    status: 502,
    category: 'Routing',
    message: 'Router has too many has selections.',
    userMessage: 'A routing error occurred. Please try again.',
  },
  SANDBOX_NOT_FOUND: {
    code: 'SANDBOX_NOT_FOUND',
    status: 404,
    category: 'Sandbox',
    message: 'Sandbox not found.',
    userMessage: 'The requested resource could not be found.',
  },
  SANDBOX_NOT_LISTENING: {
    code: 'SANDBOX_NOT_LISTENING',
    status: 502,
    category: 'Sandbox',
    message: 'Sandbox is not listening.',
    userMessage: 'The server is not responding. Please try again.',
  },
  SANDBOX_STOPPED: {
    code: 'SANDBOX_STOPPED',
    status: 410,
    category: 'Sandbox',
    message: 'Sandbox has stopped.',
    userMessage: 'The service is no longer available.',
  },
  TOO_MANY_FILESYSTEM_CHECKS: {
    code: 'TOO_MANY_FILESYSTEM_CHECKS',
    status: 502,
    category: 'Routing',
    message: 'Too many filesystem checks.',
    userMessage: 'A server error occurred. Please try again.',
  },
  TOO_MANY_FORKS: {
    code: 'TOO_MANY_FORKS',
    status: 502,
    category: 'Routing',
    message: 'Too many forks.',
    userMessage: 'A server error occurred. Please try again.',
  },
  TOO_MANY_RANGES: {
    code: 'TOO_MANY_RANGES',
    status: 416,
    category: 'Request',
    message: 'Too many ranges.',
    userMessage: 'The request contains too many ranges.',
  },
  URL_TOO_LONG: {
    code: 'URL_TOO_LONG',
    status: 414,
    category: 'Request',
    message: 'URL is too long.',
    userMessage: 'The URL is too long. Please use a shorter URL.',
  },
};

/**
 * Get error information by error code
 * @param {string} errorCode - The Vercel error code
 * @returns {Object|null} Error information or null if not found
 */
export const getVercelError = (errorCode) => {
  return VERCEL_ERROR_CODES[errorCode] || null;
};

/**
 * Get error information by HTTP status code
 * @param {number} statusCode - The HTTP status code
 * @returns {Array} Array of matching error information
 */
export const getVercelErrorByStatus = (statusCode) => {
  return Object.values(VERCEL_ERROR_CODES).filter(
    (error) => error.status === statusCode
  );
};

/**
 * Get user-friendly error message
 * @param {string|number} errorCodeOrStatus - The error code or HTTP status
 * @returns {string} User-friendly error message
 */
export const getUserFriendlyMessage = (errorCodeOrStatus) => {
  // If it's a number, treat it as status code
  if (typeof errorCodeOrStatus === 'number') {
    const errors = getVercelErrorByStatus(errorCodeOrStatus);
    if (errors.length > 0) {
      return errors[0].userMessage;
    }
    // Fallback for common HTTP status codes
    return getDefaultMessageForStatus(errorCodeOrStatus);
  }

  // Otherwise, treat it as error code
  const error = getVercelError(errorCodeOrStatus);
  if (error) {
    return error.userMessage;
  }

  return 'An unexpected error occurred. Please try again.';
};

/**
 * Get default message for HTTP status code
 * @param {number} statusCode - The HTTP status code
 * @returns {string} Default error message
 */
const getDefaultMessageForStatus = (statusCode) => {
  const statusMessages = {
    400: 'Bad request. Please check your input and try again.',
    401: 'You are not authorized to access this resource.',
    403: 'Access forbidden. You don\'t have permission.',
    404: 'The requested resource could not be found.',
    408: 'Request timeout. Please try again.',
    413: 'The request is too large. Please reduce the size.',
    414: 'The URL is too long. Please use a shorter URL.',
    416: 'The request range is invalid.',
    429: 'Too many requests. Please wait a moment and try again.',
    431: 'The request headers are too large.',
    500: 'Internal server error. Please try again later.',
    502: 'Bad gateway. The server is temporarily unavailable.',
    503: 'Service unavailable. Please try again later.',
    504: 'Gateway timeout. The request took too long.',
    508: 'A processing error occurred. Please refresh the page.',
  };

  return statusMessages[statusCode] || 'An unexpected error occurred. Please try again.';
};

/**
 * Check if error is a Vercel error
 * @param {Error|string|number} error - The error object, error code, or status code
 * @returns {boolean} True if it's a Vercel error
 */
export const isVercelError = (error) => {
  if (typeof error === 'string') {
    return error in VERCEL_ERROR_CODES;
  }
  if (typeof error === 'number') {
    return getVercelErrorByStatus(error).length > 0;
  }
  if (error?.code) {
    return error.code in VERCEL_ERROR_CODES;
  }
  return false;
};

