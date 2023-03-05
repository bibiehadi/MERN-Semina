const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-error');

class NotFound extends CustomAPIError {
  constructor(message) {
    super(message);

    this.status_code = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFound;
