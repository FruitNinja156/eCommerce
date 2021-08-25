const morgan = require('morgan');
const logger = require('./logger');

logger.stream = {
    write: message => logger.info(message.substring(0, message.lastIndexOf('\n')))
};

module.exports = morgan(
    ':method :url :status :remote-addr :remote-user :response-time ms - :res[content-length] nl',
    { stream: logger.stream }
);