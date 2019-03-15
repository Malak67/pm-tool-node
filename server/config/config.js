require('dotenv').config()

module.exports = {
  'development': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_DATABASE,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_CONNECTION,
    'port': process.env.DB_PORT,
    'server_port': process.env.PORT,
    'jwt_encryption': process.env.JWT_ENCRYPTION,
    'jwt_expiration': process.env.JWT_EXPIRATION
  },
  'test': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_DATABASE,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_CONNECTION,
    'port': process.env.DB_PORT,
    'server_port': process.env.PORT,
    'jwt_encryption': process.env.JWT_ENCRYPTION,
    'jwt_expiration': process.env.JWT_EXPIRATION
  },
  'production': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_DATABASE,
    'host': process.env.DB_HOST,
    'dialect': process.env.DB_CONNECTION,
    'port': process.env.DB_PORT,
    'server_port': process.env.PORT,
    'jwt_encryption': process.env.JWT_ENCRYPTION,
    'jwt_expiration': process.env.JWT_EXPIRATION
  }
}
