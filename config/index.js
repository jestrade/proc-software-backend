const dotenv = require("dotenv");

dotenv.config();

const config = {
    http: {
        host: process.env.HTTP_HOST || "0.0.0.0",
        port: process.env.PORT || process.env.HTTP_PORT,
    },
    log: {
        access: "../logs/" + process.env.LOG_ACCESS,
    },
};

module.exports = { config };