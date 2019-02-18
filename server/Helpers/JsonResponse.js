const response = {};

response.format = (statusCode, status, message, data) => {
  return {
    statusCode,
    status,
    message,
    data
  };
};

module.exports = response;
