'use strict'
// Use HTTP status codes

const STATUS_CODES = {
  // Success
  OK: 200,
  CREATED: 201,
  // ACCEPTED: 202,
  DELETED: 204,
  // Redirection
  NOT_MODIFIED: 304,
  //  Client error
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  // PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  // METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE: 422,
  //  Server error
  INTERNAL_SERVER_ERROR: 500
}

module.exports = {
  STATUS_CODES: Object.freeze(STATUS_CODES)
}
