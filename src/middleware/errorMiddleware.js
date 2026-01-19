function errorMiddleware(err, req, res, next) {
  console.error(err); // log error (can be replaced with logger)

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
}

module.exports = { errorMiddleware };
